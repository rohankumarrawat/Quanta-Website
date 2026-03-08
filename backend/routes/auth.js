const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { usingInMemory } = require("../config/db");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "quanta_secret";

// In-memory user store (fallback when MongoDB is unavailable)
const memUsers = [];

function generateToken(user) {
    return jwt.sign(
        { id: user._id || user.id, username: user.username, email: user.email },
        JWT_SECRET,
        { expiresIn: "7d" }
    );
}

// POST /api/auth/register
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password)
            return res.status(400).json({ message: "All fields are required" });
        if (password.length < 6)
            return res.status(400).json({ message: "Password must be at least 6 characters" });

        if (usingInMemory()) {
            const exists = memUsers.find((u) => u.email === email || u.username === username);
            if (exists) return res.status(409).json({ message: "User already exists" });
            const hashed = await bcrypt.hash(password, 12);
            const user = { id: Date.now().toString(), username, email, password: hashed };
            memUsers.push(user);
            const token = generateToken(user);
            return res.status(201).json({ token, user: { id: user.id, username, email } });
        }

        const exists = await User.findOne({ $or: [{ email }, { username }] });
        if (exists) return res.status(409).json({ message: "User already exists" });

        const user = await User.create({ username, email, password });
        const token = generateToken(user);
        res.status(201).json({ token, user: { id: user._id, username, email } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ message: "Email and password are required" });

        if (usingInMemory()) {
            const user = memUsers.find((u) => u.email === email);
            if (!user) return res.status(401).json({ message: "Invalid email or password" });
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) return res.status(401).json({ message: "Invalid email or password" });
            const token = generateToken(user);
            return res.json({ token, user: { id: user.id, username: user.username, email } });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid email or password" });
        const valid = await user.comparePassword(password);
        if (!valid) return res.status(401).json({ message: "Invalid email or password" });

        const token = generateToken(user);
        res.json({ token, user: { id: user._id, username: user.username, email } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

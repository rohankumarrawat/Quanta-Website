const express = require("express");
const Question = require("../models/Question");
const auth = require("../middleware/auth");
const { usingInMemory } = require("../config/db");

const router = express.Router();

// In-memory store
// In-memory store
let memQuestions = [
    {
        _id: "1",
        votes: 42,
        answers: [
            { content: "You should use the `MemoryCore.setCorrectionPolicy()` method. It allows you to toggle between automatic and manual modes.", username: "qubit_master", createdAt: "2026-03-07T10:00:00Z" }
        ],
        views: 1203,
        title: "How to implement quantum error correction in Quanta?",
        preview: "I'm trying to implement a simple error correction code using the Memory Core module...",
        content: "I'm trying to implement a simple error correction code using the Memory Core module. The documentation mentions automatic error correction, but I need more control over the correction strategy. How can I manually specify which syndrome measurements to perform?",
        tags: ["quantum-computing", "error-correction", "memory-core"],
        username: "quantum_dev",
        timePosted: "2 hours ago",
        isAnswered: true
    },
    {
        _id: "2",
        votes: 38,
        answers: [],
        views: 892,
        title: "Best practices for optimizing quantum circuit depth?",
        preview: "My Quanta code compiles but the resulting circuit depth is too large for current NISQ devices...",
        content: "My Quanta code compiles but the resulting circuit depth is too large for current NISQ devices. What are the recommended approaches for reducing circuit depth while maintaining algorithm correctness? I've tried gate fusion but the improvements are minimal.",
        tags: ["optimization", "circuit-design", "performance"],
        username: "alice_quantum",
        timePosted: "5 hours ago",
        isAnswered: false
    },
];

// GET /api/community  ?filter=all|unanswered|popular|recent  ?sort=newest|votes|activity
router.get("/", async (req, res) => {
    try {
        const { filter = "all", sort = "newest" } = req.query;

        if (usingInMemory()) {
            let result = [...memQuestions];
            if (filter === "unanswered") result = result.filter((q) => !q.isAnswered);
            if (filter === "popular") result = result.sort((a, b) => b.votes - a.votes);
            if (sort === "votes") result = result.sort((a, b) => b.votes - a.votes);
            return res.json(result);
        }

        let query = Question.find();
        if (filter === "unanswered") query = query.where("isAnswered").equals(false);
        if (sort === "votes") query = query.sort({ votes: -1 });
        else if (sort === "activity") query = query.sort({ updatedAt: -1 });
        else query = query.sort({ createdAt: -1 });

        const questions = await query.exec();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/community/:id
router.get("/:id", async (req, res) => {
    try {
        if (usingInMemory()) {
            const q = memQuestions.find((q) => q._id === req.params.id);
            if (!q) return res.status(404).json({ message: "Question not found" });
            return res.json(q);
        }
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ message: "Question not found" });
        res.json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/community (auth required)
router.post("/", auth, async (req, res) => {
    try {
        const { title, preview, tags, content } = req.body;
        if (!title || !preview) return res.status(400).json({ message: "Title and preview are required" });

        if (usingInMemory()) {
            const q = { _id: Date.now().toString(), title, preview, content: content || preview, tags: tags || [], username: req.user.username, votes: 0, answers: [], views: 0, isAnswered: false, timePosted: "just now" };
            memQuestions.unshift(q);
            return res.status(201).json(q);
        }

        const question = await Question.create({ title, preview, content: content || preview, tags: tags || [], username: req.user.username });
        res.status(201).json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/community/:id/vote
router.post("/:id/vote", async (req, res) => {
    try {
        if (usingInMemory()) {
            const q = memQuestions.find((q) => q._id === req.params.id);
            if (!q) return res.status(404).json({ message: "Question not found" });
            q.votes += 1;
            return res.json(q);
        }
        const question = await Question.findByIdAndUpdate(
            req.params.id,
            { $inc: { votes: 1 } },
            { new: true }
        );
        if (!question) return res.status(404).json({ message: "Question not found" });
        res.json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/community/:id/answer (auth required)
router.post("/:id/answer", auth, async (req, res) => {
    try {
        const { answer } = req.body;
        if (!answer) return res.status(400).json({ message: "Answer content is required" });

        if (usingInMemory()) {
            const q = memQuestions.find((q) => q._id === req.params.id);
            if (!q) return res.status(404).json({ message: "Question not found" });
            q.answers.push({ content: answer, username: req.user.username, createdAt: new Date() });
            q.isAnswered = true;
            return res.json(q);
        }

        const question = await Question.findByIdAndUpdate(
            req.params.id,
            { $push: { answers: { content: answer, username: req.user.username } }, isAnswered: true },
            { new: true }
        );
        if (!question) return res.status(404).json({ message: "Question not found" });
        res.json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

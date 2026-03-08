const express = require("express");
const BlogPost = require("../models/BlogPost");
const auth = require("../middleware/auth");
const { usingInMemory } = require("../config/db");

const router = express.Router();

// In-memory store
let memPosts = [
    {
        _id: "1",
        title: "Introducing Quantum Error Correction in Quanta v2.7",
        preview: "We're excited to announce built-in quantum error correction capabilities that make your quantum applications more robust and reliable on real quantum hardware.",
        content: `Quantum error correction is no longer an afterthought. In Quanta v2.7, we've integrated error correction directly into the core language primitives. 

This means you can now define logical qubits with varying levels of protection using simple syntax:

\`\`\`quanta
let q = qubit<ErrorCorrected>(L5_SurfaceCode);
\`\`\`

Our benchmarks show a 40% reduction in logical error rates compared to manual implementation. This update paves the way for truly scalable quantum software development on noisy intermediate-scale quantum (NISQ) devices.`,
        author: "Dr. Sarah Chen",
        date: "March 1, 2026",
        readTime: "5 min read",
        tags: ["release", "error-correction"]
    },
    {
        _id: "2",
        title: "Building Your First Quantum Algorithm with Quanta",
        preview: "A comprehensive guide to creating quantum algorithms using Quanta's intuitive syntax. Learn the fundamentals and best practices for quantum development.",
        content: `Getting started with quantum programming can be daunting, but Quanta makes it as familiar as classical coding. 

In this tutorial, we walk through implementing a simple Grover's Search algorithm. You'll learn how to initialize the state, apply the oracle, and perform the diffusion operator.

The key takeaway is that Quanta handles the complex matrix math behind the scenes, allowing you to focus on the logic of your quantum circuits.`,
        author: "Michael Torres",
        date: "February 24, 2026",
        readTime: "8 min read",
        tags: ["tutorial", "algorithms"]
    },
];

// GET /api/blog
router.get("/", async (_req, res) => {
    try {
        if (usingInMemory()) return res.json(memPosts);
        const posts = await BlogPost.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/blog/:id
router.get("/:id", async (req, res) => {
    try {
        if (usingInMemory()) {
            const post = memPosts.find((p) => p._id === req.params.id);
            if (!post) return res.status(404).json({ message: "Post not found" });
            return res.json(post);
        }
        const post = await BlogPost.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/blog (auth required)
router.post("/", auth, async (req, res) => {
    try {
        const { title, preview, content, author, date, readTime, tags } = req.body;
        if (!title || !preview) return res.status(400).json({ message: "Title and preview are required" });

        if (usingInMemory()) {
            const post = { _id: Date.now().toString(), title, preview, content: content || "", author: author || req.user.username, date: date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }), readTime: readTime || "5 min read", tags: tags || [] };
            memPosts.unshift(post);
            return res.status(201).json(post);
        }

        const post = await BlogPost.create({ title, preview, content, author: author || req.user.username, date: date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }), readTime, tags });
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT /api/blog/:id (auth required)
router.put("/:id", auth, async (req, res) => {
    try {
        if (usingInMemory()) {
            const idx = memPosts.findIndex((p) => p._id === req.params.id);
            if (idx === -1) return res.status(404).json({ message: "Post not found" });
            memPosts[idx] = { ...memPosts[idx], ...req.body };
            return res.json(memPosts[idx]);
        }
        const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE /api/blog/:id (auth required)
router.delete("/:id", auth, async (req, res) => {
    try {
        if (usingInMemory()) {
            const idx = memPosts.findIndex((p) => p._id === req.params.id);
            if (idx === -1) return res.status(404).json({ message: "Post not found" });
            memPosts.splice(idx, 1);
            return res.json({ message: "Post deleted" });
        }
        const post = await BlogPost.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json({ message: "Post deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

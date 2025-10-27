import express from "express";
const router = express.Router();

// Local "AI" test logic
router.post("/ask", (req, res) => {
  const { message } = req.body;

  // Very simple fake AI for now
  const replies = [
    "That's deep...",
    "You just don’t get it — do you?",
    "Interesting perspective.",
    "Meaning changes each time you look at it.",
    "Y.J.D.G.I — something you feel, not understand."
  ];

  const reply = replies[Math.floor(Math.random() * replies.length)];

  res.json({ reply });
});

export default router;

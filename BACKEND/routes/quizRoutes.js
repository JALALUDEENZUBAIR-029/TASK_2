const express = require("express");
const {
  getQuizzes,
  getQuizById,
  createQuiz,
  submitQuiz,
} = require("../controllers/quizController");
const router = express.Router();

router.get("/", getQuizzes);
router.get("/:id", getQuizById);
router.post("/", createQuiz);
router.post("/:id/submit", submitQuiz);

module.exports = router;

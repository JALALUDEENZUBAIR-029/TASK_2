const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      text: String,
      options: [String],
      correct: String,
    },
  ],
});

module.exports = mongoose.model("Quiz", quizSchema);

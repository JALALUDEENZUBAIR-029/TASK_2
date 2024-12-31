import React, { useState } from "react";
import axios from "../services/api";

const QuizForm = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { text: "", options: ["", "", "", ""], correct: "" },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectChange = (qIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].correct = value;
    setQuestions(updatedQuestions);
  };

  const addOption = (qIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options.push("");
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", options: ["", "", "", ""], correct: "" },
    ]);
  };

  const handleSubmit = async () => {
    await axios.post("/api/quizzes", { title, questions });
    alert("Quiz Created");
  };

  return (
    <div className="form-container">
      <h2>Create a New Quiz</h2>
      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {questions.map((q, qIndex) => (
        <div key={qIndex}>
          <input
            type="text"
            placeholder="Question Text"
            value={q.text}
            onChange={(e) =>
              handleQuestionChange(qIndex, "text", e.target.value)
            }
          />
          {q.options.map((opt, oIndex) => (
            <input
              key={oIndex}
              type="text"
              placeholder="Option"
              value={opt}
              onChange={(e) =>
                handleOptionChange(qIndex, oIndex, e.target.value)
              }
            />
          ))}
          <input
            type="text"
            placeholder="Correct Answer (copy one of the options)"
            value={q.correct}
            onChange={(e) => handleCorrectChange(qIndex, e.target.value)}
          />
          <button onClick={() => addOption(qIndex)}>Add Option</button>
        </div>
      ))}
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizForm;

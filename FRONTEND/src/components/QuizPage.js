import React, { useEffect, useState } from "react";
import axios from "../services/api";
import { useParams } from "react-router-dom";
// import "./QuizPage.css";

const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Fetch the quiz data from the backend when the page loads
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`/api/quizzes/${id}`);
        setQuiz(response.data);
        setAnswers(new Array(response.data.questions.length).fill(""));
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`/api/quizzes/${id}/submit`, {
        answers,
      });
      setScore(response.data.score);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-container">
      <h2>{quiz.title}</h2>
      <div className="questions">
        {quiz.questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question.text}</p>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
      {!submitted ? (
        <button onClick={handleSubmit}>Submit Quiz</button>
      ) : (
        <div className="result">
          <h3>
            Your Score: {score} / {quiz.questions.length}
          </h3>
        </div>
      )}
    </div>
  );
};

export default QuizPage;

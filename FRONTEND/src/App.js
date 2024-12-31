import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import QuizForm from "./components/QuizForm";
import QuizPage from "./components/QuizPage";
import QuizzesPage from "./components/QuizzesPage"; // Import the new component
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<QuizForm />} />
      <Route path="/quizzes" element={<QuizzesPage />} /> {/* Add this route */}
      <Route path="/quizzes/:id" element={<QuizPage />} />
    </Routes>
  </Router>
);

export default App;

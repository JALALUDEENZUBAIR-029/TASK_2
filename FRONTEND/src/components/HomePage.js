import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="home-container">
    <h1>Welcome to the Quiz App</h1>
    <Link to="/create" className="btn">
      Create Quiz
    </Link>
    <Link to="/quizzes" className="btn">
      Take a Quiz
    </Link>
  </div>
);

export default HomePage;

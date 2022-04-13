import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      <h1>quiz</h1>
      <Link to="submit">
        <button>Quiz</button>
      </Link>
    </div>
  );
};

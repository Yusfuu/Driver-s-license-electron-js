import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>quiz</h1>
      <Link to={"/quiz"}>
        <button>Quiz</button>
      </Link>
    </div>
  );
};

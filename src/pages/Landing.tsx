import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      <h1>quiz</h1>
      <Link to="/quiz">
        <span>quiezzzzz</span>
      </Link>
      <Link to="/submit">
        <span>submit</span>
      </Link>
      <Link to="/admin">
        <span>admin</span>
      </Link>
    </div>
  );
};

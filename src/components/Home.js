import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="homepage-container">
        <h1>Back on Track</h1>
        <p>
          <button className="create-goal"
            onClick={() => {
              navigate("goals/create");
            }}
          >
            Create a Goal!
          </button>
        </p>
      </div>
    </>
  );
};

import React from "react";
import { Button } from "bootstrap";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="homepage">
          <h1>Back on Track</h1>
          
            <button
              className="create-goal"
              type="button"
              onClick={() => {
                navigate("goals/create");
              }}
            >
              Create a Goal!
            </button>
      </div>
    </>
  );
};

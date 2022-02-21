import React from "react"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    
    const navigate = useNavigate()

return (
  <>
      <h1>Back on Track</h1>
      <p>
        <button
          onClick={() => {
            navigate.push("goals/create");
          }}
        >
          Create a Goal!
        </button>
      </p>
  </>
);
}
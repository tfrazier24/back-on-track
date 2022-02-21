import React from "react"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    
    const navigate = useNavigate()

return (
  <>
  <div>
      <h1>Back on Track</h1>
      <p>
        <button
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
}
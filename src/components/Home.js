import React from "react"
import { useHistory } from "react-router-dom"
import Jumbotron from "react-bootstrap/Jumbotron";

export const Home = () => {
    
    const history = useHistory()

return (
  <>
    <Jumbotron>
      <h1>Back on Track</h1>
      <p>
        <button
          onClick={() => {
            history.push("goals/create");
          }}
        >
          Create a Goal!
        </button>
      </p>
    </Jumbotron>
  </>
);
}
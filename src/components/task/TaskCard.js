import React from "react";
import "./Task.css";
import { Link } from "react-router-dom";

export const TaskCard = ({ task, handleComplete }) => (
  <section className="task">
    {console.log(task)}
    <div className="individual_task">
      <p>{task.name}</p>
      <p>Date Due: {task.date}</p>
      <button className="complete-button" onClick={() => handleComplete(task)}>
        {"\u2714"}
      </button>
    </div>
  </section>
);

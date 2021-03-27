import React from "react";
import "./Task.css";
import { Link } from "react-router-dom";

export const TaskCard = ({ task }) => (
  <section className="task">
    <h3 className="task_name">Task List</h3>
    {console.log(task)}
    <div className="individual_task">{task.name}</div>
  </section>
);

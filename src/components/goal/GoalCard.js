import React from "react"
import "./Goal.css"
import { Link } from "react-router-dom"

export const GoalCard = ({ goal }) => (
  <section className="goal">
    <h2 className="goal_name">
      <Link to={`/goals/details/${goal.id}`}>{goal.description}</Link>
    </h2>
    {/* {console.log(goal)} */}
  </section>
);


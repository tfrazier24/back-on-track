import React from "react"
import "./Goal.css"
import { Link } from "react-router-dom"

export const GoalCard = ({ goal }) => (
  <section className="goal">
    <h3 className="goal_name">
      <Link to={`/goals/details/${goal.id}`}>{goal.description}</Link>
    </h3>
    {/* {console.log(goal)} */}
  </section>
);


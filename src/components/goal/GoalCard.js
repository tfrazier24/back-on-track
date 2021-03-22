import React from "react"
import "./Goal.css"

export const GoalCard = ({goal}) => (
  <section className="goal">
    <h3 className="goal_name">{goal.description}</h3>
    {console.log(goal)}
  </section>
);
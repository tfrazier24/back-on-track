import React, { useContext, useEffect, useState } from "react";
import { GoalContext } from "./GoalProvider";
import "./Goal.css";
import { useParams, useHistory } from "react-router-dom";

export const GoalDetail = () => {
  const { getGoalById } = useContext(GoalContext);

  const [goal, setGoal] = useState({});

  const { goalId } = useParams();

  const history = useHistory();

  useEffect(() => {
    console.log("useEffect", goalId);
    getGoalById(goalId).then((response) => {
      setGoal(response);
    });
  }, []);

  return (
    <section className="goal">
      <h3 className="goal__name">{goal.description}</h3>
      <div className="goal__date">{goal.date}</div>
    </section>
  );
};

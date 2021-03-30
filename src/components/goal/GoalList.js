import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GoalContext } from "./GoalProvider";
import { GoalCard } from "./GoalCard"
import "./Goal.css"

export const GoalList = () => {
    const { goals, getGoals } = useContext(GoalContext)
    //this will reach out and fetch all of the goals and render them 
    useEffect(() => {
        getGoals()
    }, [])


    return (
      <>
        <h2>Goals</h2>
        <div className="goals">
          {goals.map((goal) => {
            return <GoalCard key={goal.id} goal={goal} />;
          })}
        </div>
      </>
    );
}
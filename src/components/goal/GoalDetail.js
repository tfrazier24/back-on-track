import React, { useContext, useEffect, useState } from "react";
import { GoalContext } from "./GoalProvider";
import "./Goal.css";
import { useParams, useHistory } from "react-router-dom";
import { TaskContext } from "../task/TaskProvider"
import { TaskCard } from "../task/TaskCard"
import { TaskList } from "../task/TaskList";

export const GoalDetail = ({}) => {
    // useContext is grabbing the functions from their data providers and allowing us to use it
  const { getGoalById } = useContext(GoalContext);
  const {  getAllTaskByGoalId, completeTask, getTaskById} = useContext(TaskContext);

  //setting the initial state
  const [filteredTask, setFiltered] = useState([])

  const [goal, setGoal] = useState({});

  const { goalId, taskId } = useParams();


  const history = useHistory();

  useEffect(() => {
    console.log("useEffect", goalId);
    getGoalById(goalId).then((response) => {
      setGoal(response);
    }).then(() => {
        getAllTaskByGoalId(goalId).then((response) => {
      
          setFiltered(response);
        });
})}, []);


    const handleComplete = (task) => {
        completeTask(task).then((response) => {
      
          setFiltered(response);
        });

    }

  return (
    <section className="goal">
      <h1 className="goal__name">{goal.description}</h1>
      <div className="goal__date">You created this goal on: {goal.date}</div>
      <div className="task__name">
        <h3>Tasks</h3>
        {filteredTask.filter(task => task.completed === false).map((task) => { 
            return (      
          <li>
            <TaskCard key={task.id} task={task} handleComplete={handleComplete} />
           
          </li>
            )
            }
        )}
      </div>
    </section>
  );
};

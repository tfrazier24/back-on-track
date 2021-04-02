import React, { useContext, useEffect, useState } from "react"
import "./Goal.css"
import { Link } from "react-router-dom"
import { ProgressBar } from "react-bootstrap"
import { TaskContext } from "../task/TaskProvider"

export const GoalCard = ({ goal }) => {

  const { tasks, getTasks, getAllTaskByGoalId } = useContext(TaskContext);

  const [tasksPerGoal, setTasksPerGoal] = useState([])

  useEffect(() => {
   getAllTaskByGoalId(goal.id).then(setTasksPerGoal)
  }, [])

  


  //function to calculate amount of tasks to complete vs the amount completed to fill up the progress bar
  const calculateCompleted = () => {
   let relatedTasks = tasksPerGoal
    
      console.log(relatedTasks)
    let completed = []
    let value = relatedTasks.forEach((task) =>{
      if(task.completed === true) {
        completed.push(task)
      }
    })

    let completedValue= completed.length
    console.log(completedValue)
    // let completedValue2 = relatedTasks.filter(x => x.completed)
    let tasksValue = relatedTasks.length
    value = (completedValue / tasksValue) * 100
    console.log(tasksValue)
    return value
  }

return (
  <section className="goal">
    <h2 className="goal_name">
      <Link to={`/goals/details/${goal.id}`}>{goal.description}</Link>
    </h2>
    <div className="progress_bar">
      <ProgressBar  animated now={calculateCompleted()} />
    </div>
  </section>
)
};


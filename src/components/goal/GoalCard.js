import React, { useContext, useEffect } from "react"
import "./Goal.css"
import { Link } from "react-router-dom"
import { ProgressBar } from "react-bootstrap"
import { TaskContext } from "../task/TaskProvider"

export const GoalCard = ({ goal }) => {

  const {tasks, getTasks} = useContext(TaskContext)

  useEffect(() => {
    getTasks()
  }, [])

  //function to calculate amount of tasks to complete vs the amount completed to fill up the progress bar
  const calculateCompleted = () => {
    let completed = []
    let value = tasks.forEach((task) =>{
      if(task.completed === true) {
        completed.push(task)
      }
    })

    let completedValue= completed.length
    let tasksValue = tasks.length
    value = (completedValue / tasksValue) * 100
    return value
  }

return (
  <section className="goal">
    <h2 className="goal_name">
      <Link to={`/goals/details/${goal.id}`}>{goal.description}</Link>
    </h2>
    <div className="progress_bar">
      <ProgressBar animated now={calculateCompleted()} />
    </div>
  </section>
)
};


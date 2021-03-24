import React, { useContext, useEffect, useState } from "react";
import "./Task.css"
import { useHistory, useParams } from "react-router-dom"
import { TaskContext } from "./TaskProvider"

export const TaskForm = () => {

    const { addTask } = useContext(TaskContext)

    // const goalId = 

    const [task, setTask] = useState({
        name:"",
        date: 0,
        goalId: 0
    })



    const handleControlledInputChange = (event) => {

        const newTask = { ...task }

        newTask[event.target.id] = event.target.value
    
        setTask(newTask)
    }

    const history = useHistory()

    const handleClickSaveTask = (event) => {
        event.preventDefault()
        
        if (task.name === "") {
            window.alert("Please add a task")
        } else {
            task.userId = +localStorage.getItem("backOnTrack_user")
            addTask(task)
            .then(() => history.push("/goals"))
        }
    }


    return (
      <aside className="task_form">
        <h2 className="taskForm_title">Create a task</h2>
        <fieldset>
          <label htmlFor="task">What task would you like to add?</label>
          <div className="form_group">
            <input
              type="text"
              id="name"
              onChange={handleControlledInputChange}
              required
              autoFocus
              className="form-control"
              placeholder="Name of task..."
            />
          </div>
        </fieldset>
        <fieldset>
          <label htmlFor="task_due">When is this task due?</label>
          <div className="form_group">
            <input
              type="date"
              id="date"
              onchange={handleControlledInputChange}
              required
              autoFocus
              className="form-control"
            />
          </div>
        </fieldset>
        <button 
        onClick={handleClickSaveTask}
        >Add Task</button>
      </aside>
    );
}
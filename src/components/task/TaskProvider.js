import React, { useState, createContext } from "react"

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
        .then(res => res.json())
        .then(setTasks)
    }

    const addTask = task => {
        return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(response => response.json())
    }

    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`)
            .then(res => res.json())
    }

    const getAllTaskByGoalId = (id) => {
      return fetch(`http://localhost:8088/tasks?goalId=${id}`).then((res) =>
        res.json()
      );
    };

    const completeTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            completed: true
        })
    })
        .then(() => getAllTaskByGoalId(task.goalId))
    }

    return (
      <TaskContext.Provider
        value={{
          tasks,
          getTasks,
          addTask,
          getTaskById,
          getAllTaskByGoalId,
          completeTask
        }}
      >
        {props.children}
      </TaskContext.Provider>
    );
}
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TaskContext } from "./TaskProvider";
import { TaskCard } from "./TaskCard";
import "./Task.css";

export const TaskList = () => {
    const {tasks, getTasks} = useContext(TaskContext)

    useEffect(() => {
        getTasks()
    }, [])


return (
    <>
        <div className="tasks">
            {tasks.map((task) => {
                return <TaskCard key={task.id} task={task} />
            })}
        </div>
    </>
)
}
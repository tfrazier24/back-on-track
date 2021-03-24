import React, { useState, createContext } from "react"

export const GoalContext = createContext()

export const GoalProvider = (props) => {
    const [goals, setGoals] = useState([])

    // function to fetch all the created goals from the API 
    const getGoals = () => {
        return fetch ("http://localhost:8088/goals")
        .then(res => res.json())
        .then(setGoals)
    }

    const addGoal = goal => {
        return fetch ("http://localhost:8088/goals", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(goal)
        })
        .then(response => response.json())
    }

    const getGoalById = (id) => {
        return fetch(`http://localhost:8088/goals/${id}`)
            .then(res => res.json())
    }

    // exposing the different methods through the Context so they can be seen 
    return (
        <GoalContext.Provider value={{
            goals, getGoals, addGoal, getGoalById
        }}>
            {props.children}
        </GoalContext.Provider>
    )    
}
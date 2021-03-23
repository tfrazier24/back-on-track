import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { GoalProvider } from "./goal/GoalProvider"
import { GoalList } from "./goal/GoalList"
import { GoalForm } from "./goal/GoalForm"
import { TaskForm } from "./task/TaskForm"
import { TaskProvider } from "./task/TaskProvider"

export const ApplicationViews = () => {
    return (

        <>
        
        <Route exact path="/">
            <Home />
        </Route>
        <TaskProvider>
            <GoalProvider>
                <Route exact path="/goals">
                    <GoalList />
                    <TaskForm /> 
                </Route>
                <Route exact path="/goals/create">
                    <GoalForm />
                </Route>
            </GoalProvider>
        </TaskProvider>
        </>

    )
}
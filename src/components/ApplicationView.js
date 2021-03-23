import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { GoalProvider } from "./goal/GoalProvider"
import { GoalList } from "./goal/GoalList"
import { GoalForm } from "./goal/GoalForm"


export const ApplicationViews = () => {
    return (

        <>
        
        <Route exact path="/">
            <Home />
        </Route>
        
        <GoalProvider>
            <Route exact path="/goals">
               <GoalList /> 
            </Route>
            <Route exact path="/goals/create">
                <GoalForm />
            </Route>
        </GoalProvider>
        </>

    )
}
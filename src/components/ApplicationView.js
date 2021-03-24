import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { GoalProvider } from "./goal/GoalProvider"
import { GoalList } from "./goal/GoalList"
import { GoalForm } from "./goal/GoalForm"
import { TaskForm } from "./task/TaskForm"
import { TaskContext, TaskProvider } from "./task/TaskProvider"
import { GoalDetail } from "./goal/GoalDetail"

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
            </Route>
            <Route exact path="/goals/create">
              <GoalForm />
            </Route>
            <Route exact path="/goals/details/:goalId(\d+)">
              <GoalDetail />
              <TaskForm />
            </Route>
          </GoalProvider>
        </TaskProvider>
      </>
    );
}
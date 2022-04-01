import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { GoalProvider } from "./goal/GoalProvider";
import { GoalList } from "./goal/GoalList";
import { GoalForm } from "./goal/GoalForm";
import { TaskForm } from "./task/TaskForm";
import { TaskContext, TaskProvider } from "./task/TaskProvider";
import { GoalDetail } from "./goal/GoalDetail";
import { TaskList } from "./task/TaskList";
import "./task/Task.css";
export const ApplicationView = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}>
          {" "}
        </Route>

        <Route exact path="/goals" element={<GoalList />}>
          {" "}
        </Route>
        <Route exact path="/goals/create" element={<GoalForm />}>
          {" "}
        </Route>
        {/* <Route exact path="/goals/details/:goalId(\d+)"> element={<div id="detail_container">
              <GoalDetail />
              <TaskForm />
              </div>}> </Route> */}
      </Routes>
    </>
  );
};

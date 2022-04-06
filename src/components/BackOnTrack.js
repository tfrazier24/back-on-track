import React from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationView } from "./ApplicationView";
import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { TaskProvider } from "./task/TaskProvider";
import { GoalProvider } from "./goal/GoalProvider";

export const BackOnTrack = () => (
  <div id="main_container">
    <Router>
      <TaskProvider>
        <GoalProvider>
          <ApplicationView />
          <Routes>
            <Route path="/login" element={<Login />}>
              {" "}
            </Route>
            <Route path="/register" element={<Register />}>
              {" "}
            </Route>
          </Routes>
        </GoalProvider>
      </TaskProvider>
    </Router>
  </div>
);

{
  /* <Route
render={() => {
  if (localStorage.getItem("backOnTrack_user")) {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
}}
/> */
}

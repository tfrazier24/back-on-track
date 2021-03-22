import React, { useContext, useEffect, useState } from "react"
import { GoalContext } from "./GoalProvider"
import "./Goal.css"
import { useHistory, useParams } from "react-router-dom"

export const GoalForm = () => {
    const { addGoal } = useContext(GoalContext)

    //defining and setting the initial state of the form inputs with useState()
    const [goal, setGoal] =useState({
        description: "",
        // id: 0
        date: 0,
        userId: 0
    })
    
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        //this variable will make a copy of state and then set state
        const newGoal = { ...goal }
        
        newGoal[event.target.id] = event.target.value

        setGoal(newGoal)
    }

    const handleClickSaveGoal = (event) => {
        event.preventDefault() //This will oprevent the browser from submitting the form
        const description = goal.description
        if (description === "") {
            window.alert("Please add a description of your goal")
        } else {
            addGoal(goal)
            .then(() => history.push("/goals"))
        }

    }

    return (
      <form className="goalForm">
        <h2>New Goal</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Goal: </label>
            <input
              type="text"
              id="description"
                onChange={handleControlledInputChange}
              required
              autoFocus
              className="form-control"
              placeholder="Description of goal"
                value={goal.description}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              id="description"
                onChange={handleControlledInputChange}
              required
              autoFocus
              className="form-control"
                value={goal.date}
            />
          </div>
        </fieldset>
        <button className="btn btn-primary"
        onClick={handleClickSaveGoal}
        >Add new Goal!</button>
      </form>
    );
}
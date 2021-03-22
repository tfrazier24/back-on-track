import React from "react"
import { useHistory } from "react-router-dom"

export const Home = () => {
    
    const history = useHistory()

return (
    <>
    <h2>Back on Track</h2>

    <button
    onClick={() => {
        history.push("goals/create")
    }
    }
    >Create a Goal!</button>
    </>
)
}
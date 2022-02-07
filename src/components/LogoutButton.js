import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addErrors } from "../store/actions/weatherActions"


const LogoutButton = () => {

const user_info = useSelector(state => state.location)
const navigate = useNavigate()
const dispatch = useDispatch()


const handleSubmit = (e) => {
    // e.preventDefault()
    fetch("logout", {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_id : user_info[0].id})
      }).then((res) => {
        if (res.ok) {
            res.json().then(navigate("login"))
        } else {
            res.json().then((res) => dispatch(addErrors(res)))
            console.log("error", res.status, res.statusText)
        }
    })
}

return (
    <div>
        <form onSubmit={handleSubmit} >
            <button type="submit">Logout</button>
        </form>
        <br/>
    </div>
);
}

export default LogoutButton

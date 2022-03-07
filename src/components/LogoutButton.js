import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addErrors } from "../store/actions/weatherActions"
import { useEffect, useState } from "react"
import { addUser } from "../store/actions/locationsActions"

const LogoutButton = () => {

    const user_info = useSelector(state => state.location)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [logout, setLogout] = useState([])
    // console.log("logout", logout.payload.error)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("logout", {
            method: 'DELETE', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({user_id : user_info[0].id})
        }).then((res) => {
            if (res.ok) {
                (navigate("/"))
                console.log("loggedout")
            } else {
                res.json().then((res) => dispatch(addErrors(res)))
                console.log("error logout", res.status, res.statusText)
            }
        })
    }

    useEffect(() => { 
        fetch("me")
        .then((res) => res.json())
        .then((res) => dispatch(addUser(res)))
        .then((res) => setLogout(res))
        }, []
      )

      if(logout.payload)
        if(!logout.payload.error)
            return (
                <div>
                    <form onSubmit={handleSubmit} >
                        <button type="submit">Logout</button>
                    </form>
                    <br/>
                </div>
            )
        else
            return (
                <div>
                    <button disabled >Logout</button>
                </div>
            )
            else
            return (
                <div>Loading</div>
            )


// no superfluous return
}

export default LogoutButton

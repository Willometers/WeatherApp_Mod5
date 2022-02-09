import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { addErrors } from "../store/actions/weatherActions"


function Login() {
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        // e.preventDefault()
        console.log("login")
        fetch("login", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email : email, password : password})
          })
          .then((res) => {
            if (res.ok) {
              res.json().then((user) => console.log(user));
              navigate("/")
            } else {
                res.json().then((res) => dispatch(addErrors(res)))
                console.log("error", res.status, res.statusText)
            }
          }) 
    }

    return (
        <div >
        <br/>
        <form onSubmit={handleSubmit} >
            <input placeholder="Email" 
                onChange={handleEmail}/>
            <input placeholder="Password" 
                onChange={handlePassword}/>
            <button>Login</button>
        </form>
    </div>
    )
}

export default Login
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { addErrors } from "../store/actions/weatherActions"
import Signup from "./Signup";

function Login() {
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
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
              window.location.reload(false);
            } else {
                res.json().then((res) => dispatch(addErrors(res)))
                console.log("login error", res.status, res.statusText)
                setError(res)
            }
          }) 
    }

    return (
        <div >
                <form onSubmit={handleSubmit} >
                    <input placeholder="Email" 
                        onChange={handleEmail}/>
                    <input placeholder="Password" 
                        onChange={handlePassword}/>
                    <button>Login</button>
                    
                </form>
            <h6 style={{color: "red"}}>{error.statusText}</h6>
        <br/>
            <h4>OR</h4>
        <br/>
            < Signup />
    </div>
    )
}

export default Login
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { addErrors } from "../store/actions/weatherActions"
import Signup from "./Signup";
import NavBar from "../containers/NavBar";

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
                console.log("login error", res.status, res.statusText)
                setError(res)
            }
          }) 
    }

    return (
        <div>
        <NavBar />
        <div >
                <form onSubmit={handleSubmit} >
                    <input placeholder="Email" 
                        onChange={handleEmail}/>
                    <input type="password" placeholder="Password" 
                        onChange={handlePassword}/>
                    <button>Login</button>
                    
                </form>
                <div> {error.statusText ? <h6 style={{color: "red"}}>Email or Password Incorrect</h6> : <h1></h1>}</div>
        <br/>
            <h4>OR</h4>
        <br/>
            < Signup />
    </div>
     </div>
    )
}

export default Login
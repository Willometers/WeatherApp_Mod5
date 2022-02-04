import React, { useState } from "react"
// import { useNavigate } from 'react-router-dom';

const URL = "login"

function Login() {

    // const navigate = useNavigate()
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")

    function handleEmail(e) {
        e.preventDefault()
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        e.preventDefault()
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log("login")
        fetch(URL, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email : email, password : password})
          })
          .then((res) => res.json())
          .then((res) => console.log("response", res))
        //   .then(navigate("/"))
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
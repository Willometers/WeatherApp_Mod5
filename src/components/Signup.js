import React, { useState } from "react"
import { Navigate } from "react-router-dom"

const URL = "http://localhost:4000/signup"
// if no errors navigate to Saved FavoritesShow page, else sho errors(already done)

function Signup() {

    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")
    const [passwordConfirmation, setPasswordConfirmation ] = useState("")
    const [errors, setErrors] = useState([])

    function handleEmail(e) {
        e.preventDefault()
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        e.preventDefault()
        setPassword(e.target.value)
    }
    function handlePasswordConfirmation(e) {
        e.preventDefault()
        setPasswordConfirmation(e.target.value)
    }

    function AlertShow() {
        if (errors.error)
            return (
                errors.error.map((err) => {
                    return (
                      <div style={{color:'red'}}>{err}</div>
                        )
                    }))
        else {
            console.log("no alert triggered")
        }
}
    
    function handleSubmit(e) {
        e.preventDefault()
        if(password === passwordConfirmation) {
            console.log("sign up",URL, email, password, passwordConfirmation)
            fetch(URL, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                      email : email,
                      password_digest : password
                  })
              })
              .then(res => res.json())
              .then(data => {
                console.log('Success:', data);
                if(data.error === undefined)
                    console.log("no errors")

                else
                    setErrors(data);
                    console.log(data)
              })
        }
        else {
        }
    }


    return (
        <div >
        <form onSubmit={handleSubmit} >
            <input placeholder="Email" 
                onChange={handleEmail}/>
            <input placeholder="Password" 
                onChange={handlePassword}/>
            <input placeholder="Password Confirmation" 
                onChange={handlePasswordConfirmation}/>
            <button>Submit</button>
            <div>{AlertShow()}</div>
        </form>
    </div>
    )
}

export default Signup

// split up components???
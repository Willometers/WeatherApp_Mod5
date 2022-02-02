import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

const URL = "signup"
// if no errors navigate to Saved FavoritesShow page, else sho errors(already done)

function Signup() {

    const navigate = useNavigate()
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

    // const AlertShow = () => {
    //     if (errors)
    //         return (
    //             errors.error.map((err) => {
    //                 return (
    //                   <div style={{color:'red'}}>{err}</div>
    //                     )
    //                 }))
    //     else {
    //         console.log("no alert triggered")
    //     }
    // }  
    
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
                      email: email,
                      password: password
                  })
              })
              .then(res => res.json())
              .then(data => {
                console.log("Response", data);
                if(data.error === undefined)
                    // navigate("/login")
                    console.log("no errors")
                    // then send to login page to create session in new component
                else
                    setErrors(...errors, data);
                    console.log("server error", data)
              })
        }
        else {
            setErrors(...errors, ["passwords do not match"])
            console.log("pw dont match", errors)
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
            {/* <div>{AlertShow()}</div> */}
        </form>
        </div>
    )
  
}

export default Signup

// split up components???
import React, { useState } from "react"
import { useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addErrors } from "../store/actions/weatherActions"

function Signup() {

    const [errorMessage, setErrorMessage ] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")
    const [passwordConfirmation, setPasswordConfirmation ] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

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

    function handleSubmit(e) {
        e.preventDefault()
        if (password === passwordConfirmation) {
            fetch("signup", {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                      email: email,
                      password: password,
                      password: passwordConfirmation
                  })
              }).then((res) => {
                if (res.ok) {
                    res.json().then(navigate("/"))
                    console.log("signed up", res)
                } else {
                    res.json().then((res) => dispatch(addErrors(res)))
                    console.log("error", res.status, res.statusText)
                }
            }) 
        } else {
            setErrorMessage("passwords must match")
            console.log(errorMessage)
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
                <button>Signup</button>
            </form>
            </div>
        )  
}
export default Signup
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from "react"
import { addUser } from "../store/actions/locationsActions"
import { useDispatch } from "react-redux"

function MySavedLocations() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.location[0])

    const handleClick = (e) => {
        console.log("clicked", user)
        navigate("/saved");
    }
    const handleLogin = (e) => {
        console.log("login", user)
        navigate("/login")
    }

    useEffect(() => { 
        fetch("me")
        .then((res) => res.json())
        .then((res) => dispatch(addUser(res)))
        .then((res) => console.log("MSL user", res))
        }, []
      )

    if(user)
        if(user.error)
            return (
                <div>
                    <button onClick={handleLogin}> Login/Signup </button>
                </div>
                )
        else
            return (
                <div>
                    <button onClick={handleClick} value={user.id}> {user.email} </button>
                </div>
                )
    else
    return (
        <div>Loading</div>
    )

}

export default MySavedLocations
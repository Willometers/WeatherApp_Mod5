//  show users favorite locations' by current tiles - make clickable and bring back to main show
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MySavedLocations() {

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

    if(user)
            if(!user.error)
                return (
                <div>
                    <button onClick={handleClick} value={user.id}> {user.email} </button>
                </div>
                )
            else
                return (
                <div>
                    <button onClick={handleLogin}> Login/Signup </button>
                </div>
                )
    else
        return (
            <div>Loading</div>
        )
}

export default MySavedLocations
import HomeButton from "../components/HomeButton"
import ForecastButton from "../components/ForecastButton"
import HourlyButton from "../components/HourlyButton"
import { useSelector } from 'react-redux'


function NavBar() {

    const state = useSelector(state => state)
    function refreshPage() {
        window.location.reload(false);
      }
    
    if (state.weather[1])
        return (
            <div>
                <h1 style={{color:'red'}}>{state.weather[1].error.message}</h1>
                <button onClick={refreshPage}>Reload</button>
                <br/>
            </div>
        )
    else
        return (
            <div>
                <HomeButton/>
                <br/>
                <HourlyButton/>
                <br/>
                <ForecastButton/>
                <br/>
            </div>
        )
}

export default NavBar
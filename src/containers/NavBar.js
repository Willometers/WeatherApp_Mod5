import HomeButton from "../components/HomeButton"
import ForecastButton from "../components/ForecastButton"
import HourlyButton from "../components/HourlyButton"
import { useSelector } from 'react-redux'
import SaveButton from "../components/SaveButton"

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
            <div style={{  
                display: "grid",  
                gridTemplateColumns: "1fr 1fr 1fr 1fr"  
              }}>
                <HomeButton/>
                <HourlyButton/>
                <ForecastButton/>
                <SaveButton />
            </div>
        )
}
export default NavBar
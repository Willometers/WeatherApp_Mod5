import HomeButton from "../components/HomeButton"
import ForecastButton from "../components/ForecastButton"
import HourlyButton from "../components/HourlyButton"
import SaveButton from "../components/SaveButton"
import Signup from "../components/Signup"
import LogoutButton from "../components/LogoutButton"
import ErrorShow from "../components/ErrorShow"
import SkiAreaDropdown from "../components/SkiAreaDropdown"


function NavBar() {

        return (
            <div style={{  
                display: "grid",  
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"  
              }}>
                <ErrorShow/>
                <SkiAreaDropdown/>
                <LogoutButton/>
                <Signup/>
                <HomeButton/>
                <HourlyButton/>
                <ForecastButton/>
                <SaveButton />
            </div>
        )
}
export default NavBar
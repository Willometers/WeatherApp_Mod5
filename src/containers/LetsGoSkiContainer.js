import LetsGoSkiShow from "../components/LetsGoSkiShow"
import SkiAreaDropdown from "../components/SkiAreaDropdown.js"
import MapShow from "../components/MapShow"
import { useState } from 'react'

const LetsGoSkiContainer = () => {

    const [resort, setResort ] = useState([])
    console.log("container state", resort)

    const setTheResort = (e) => {
        setResort(e)
    }

    return (
        <div>
            <SkiAreaDropdown setTheResort={setTheResort} />
            <LetsGoSkiShow/>
            <MapShow />
        </div>
    )
}

export default LetsGoSkiContainer
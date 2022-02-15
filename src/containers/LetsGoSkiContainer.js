import LetsGoSkiShow from "../components/LetsGoSkiShow"
import SkiAreaDropdown from "../components/SkiAreaDropdown.js"
import MapShow from "../components/MapShow"
import { useState } from 'react'

const LetsGoSkiContainer = () => {

    const [resort, setResort ] = useState([])
    console.log("container state", resort)

    const setTheResort = (skiArea) => {
        setResort(skiArea)
    }

    return (
        <div>
            <SkiAreaDropdown setTheResort={setTheResort} />
            <LetsGoSkiShow/>
            <MapShow resort={resort}/>
        </div>
    )
}

export default LetsGoSkiContainer
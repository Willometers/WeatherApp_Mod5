import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchAreaWeather } from '../store/actions/letsSkiActions'
import { useState } from 'react'
import { addMapLocation } from '../store/actions/letsSkiActions'
import { useEffect } from 'react'

const SkiAreaDropdown = () => {

    const skiAreas = useSelector(state => state.skiAreas[0])
    const dispatch = useDispatch()
    const [resort, setResort ] = useState([])
    const weather = useSelector(state => state)

      const handleSelect = (e) => {
        // e.preventDefault()
        // dispatches ski resorts zip code to search action
        dispatch(fetchAreaWeather(e.target.id))
        setResort(e.target.innerHTML)
        console.log("ski area zip", e.target.id)
        console.log("droppy", weather)
      }
    
    if (!skiAreas)
        return(
            <div></div>
        )
    else
        return (
        <Dropdown >
            <div >
              <h1>{resort}</h1>
              <br/>
              <DropdownButton   id="dropdown-basic-button" title="New York Ski Areas">
                      {skiAreas.map((area) => <Dropdown.Item id={area.location} key={area.id} onClick={handleSelect}> {area.name} </Dropdown.Item >)}
              </DropdownButton>
              <br/>
            </div>
        </Dropdown>
        )
}

export default SkiAreaDropdown
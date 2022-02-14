import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchSearchWeather } from '../store/actions/weatherActions'
import { useState } from 'react'

const SkiAreaDropdown = () => {

    const skiAreas = useSelector(state => state.skiAreas[0])
    const dispatch = useDispatch()
    const [resort, setResort ] = useState([])

      const handleSelect = (e) => {
        // e.preventDefault()
        // dispatches ski resorts zip code to search action
        dispatch(fetchSearchWeather(e.target.id))
        setResort(e.target.innerHTML)
      }
    
    if (!skiAreas)
        return(
            <div></div>
        )
    else
        return (
        <Dropdown style={{overflowY: "auto"}} >
            <h1>{resort}</h1>
            <div style={{height: "100px", width: "300px", overflowY: "auto"}}>
              <DropdownButton  id="dropdown-basic-button" title="New York Ski Areas">
                      {skiAreas.map((area) => <Dropdown.Item id={area.location} key={area.id} onClick={handleSelect}> {area.name} </Dropdown.Item >)}
              </DropdownButton>
            </div>
        </Dropdown>
        )
}

export default SkiAreaDropdown

// import { createPopper } from '@popperjs/core';
import { useEffect } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SkiAreaDropdown = () => {

    const skiAreas = useSelector(state => state.skiAreas[0])
    // debugger
    console.log("skiAreas", skiAreas)

    if (skiAreas === undefined || null)
        return(
            <div></div>
        )
    else
        return (
        <Dropdown>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                {skiAreas.map((area, index) => <Dropdown.Item value={area.id}>{area.name}</Dropdown.Item>)}
            </DropdownButton>
        </Dropdown>
        )
}

export default SkiAreaDropdown

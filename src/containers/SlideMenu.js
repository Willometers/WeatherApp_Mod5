import HomeButton from "../components/HomeButton"
import ForecastButton from "../components/ForecastButton"
import HourlyButton from "../components/HourlyButton"
import SaveButton from "../components/SaveButton"
import Signup from "../components/Signup"
import LogoutButton from "../components/LogoutButton"
import ErrorShow from "../components/ErrorShow"
import SkiAreaDropdown from "../components/SkiAreaDropdown"
import MySavedLocations from "./MySavedLocations"
import { Navbar, Nav, Container } from 'react-bootstrap'
import React from "react"

// function NavBar() {
  
//   return (
//         <Navbar bg="light" expand="lg" sticky="top" >
//         <Container>
//         <ErrorShow/>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <SkiAreaDropdown/>
//               <HomeButton/>
//               <HourlyButton/>
//               <ForecastButton/>
//               <LogoutButton/>
//               <SaveButton />
//               <MySavedLocations/>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//   )
// }
// export default NavBar

import { slide as Menu } from 'react-burger-menu'

class SlideMenu extends React.Component {

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" ><SkiAreaDropdown/></a>
        <a id="about" className="menu-item" ><HomeButton/></a>
        <a id="contact" className="menu-item" ><HourlyButton/></a>
        <a id="home" className="menu-item" ><ForecastButton/></a>
        <a id="about" className="menu-item" ><HomeButton/></a>
        <a id="contact" className="menu-item" ><LogoutButton/></a>
        <a id="home" className="menu-item" ><SaveButton /></a>
        <a id="about" className="menu-item" ><MySavedLocations/></a>
      </Menu>
    );
  }
}

export default SlideMenu

import SearchBar from '../components/SearchBar.js'
import HomeButton from "../components/HomeButton"
import ForecastButton from "../components/ForecastButton"
import HourlyButton from "../components/HourlyButton"
// import LogoutButton from "../components/LogoutButton"
// import MySavedLocations from "./MySavedLocations"
import { Navbar, Nav, Container } from 'react-bootstrap'
// import LetsGoSkiContainer from '../components/LetsGoSkiButton.js'
// import SpotifyButton from '../components/SpotifyButton.js'

function NavBar() {

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <Navbar bg="light" expand="lg" sticky="top" >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <SearchBar/>
              <HomeButton/>
              <HourlyButton/>
              <ForecastButton/>
              {/* <LogoutButton/> */}
              {/* <MySavedLocations/> */}
              {/* <LetsGoSkiContainer/> */}
              {/* <SpotifyButton /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  )
}
export default NavBar
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Show from './components/Show'
import { fetchCurrentWeather } from './store/actions/weatherActions'
import { addCurrentLocation } from './store/actions/locationsActions'
import SearchBar from './components/SearchBar'
import ForecastShow from './components/ForecastShow'
import NavBar from './containers/NavBar'
import HourlyContainer from './containers/HourlyContainer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
     navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const userLocation = {lat, long};
        dispatch(fetchCurrentWeather(userLocation))
        dispatch(addCurrentLocation(userLocation))
      },
    );
  })

  return (
    <Router>
      <div className="App">
        <NavBar />
        <br/>
        <SearchBar />
          <Routes>

          <Route 
            path="/" 
            index 
            element={<Show/>} 
            />

          <Route 
            path="/forecast" 
            index 
            element={<ForecastShow/>} 
            />

          <Route 
            path="/hourly" 
            index 
            element={<HourlyContainer/>} 
            />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Show from './components/Show'
import { fetchCurrentWeather } from './store/actions/weatherActions'
import SearchBar from './components/SearchBar'
import ForecastShow from './components/ForecastShow'

function App() {
  const dispatch = useDispatch()

  // find users lat/long to show their location's current weather at start
  useEffect(() => {
     navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const location = {lat, long};
        dispatch(fetchCurrentWeather(location))
      },
    );
  })

  return (
    <Router>
      <div className="App">
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

          </Routes>
      </div>
    </Router>
  );
}

export default App;
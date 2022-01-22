import APIKey from '../../APIKey'

// ADD_WEATHER
export const fetchCurrentWeather = (currentLocation) => {   
    return dispatch => { fetch(`${APIKey}&q=${currentLocation.lat}${" "}${currentLocation.long}&days=5&aqi=no&alerts=no`)
        .then((res) => res.json())
        .then((currentWeather) => dispatch(addCurrentWeather(currentWeather)))
    }
};

// SEARCH_WEATHER
export const fetchSearchWeather = (searchLocation) => {   
    return dispatch => { fetch(`${APIKey}&q=${searchLocation}&days=5&aqi=no&alerts=no`)
        .then((res) => res.json())
        .then((searchWeather) => dispatch(addSearchWeather(searchWeather)))
    }
};

// ADD_CURRENT_WEATHER
const addCurrentWeather = (currentWeather) => ({type: 'ADD_CURRENT_WEATHER', payload: currentWeather})
// ADD_SEARCH_WEATHER
const addSearchWeather = (searchWeather) => ({type: 'ADD_SEARCH_WEATHER', payload: searchWeather})


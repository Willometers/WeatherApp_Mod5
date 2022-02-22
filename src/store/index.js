import { createStore, applyMiddleware } from 'redux'
import { compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { weather } from './reducers/weatherReducers'
import { location } from './reducers/locationReducers'
import { skiAreas } from './reducers/skiAreasReducers'
import { letsSki } from './reducers/letsSkiReducers'
import { allUsers } from './reducers/allUsersReducer'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({ weather, location, skiAreas, letsSki, allUsers })

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
import { createStore, applyMiddleware } from 'redux'
import { compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { weather } from './reducers/weatherReducers'
import { location } from './reducers/locationReducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({ weather, location })

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
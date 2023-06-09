import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../Reducers'
const middleWare = [thunkMiddleware]
var window = require('global/window')

// user redux tools
const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(rootReducer, applyMiddleware(...middleWare))
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWare)))

export default store

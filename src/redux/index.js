import{ combineReducers } from 'redux'
import userReducer from './userReducer'
import beersReducer from './beersReducer'
export default combineReducers({user: userReducer, beers: beersReducer})
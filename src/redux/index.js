import{ combineReducers } from 'redux'
import userReducer from './userReducer'
import beersReducer from './beersReducer'
import 'bootstrap/dist/css/bootstrap.min.css';
export default combineReducers({user: userReducer, beers: beersReducer})
import { combineReducers } from "redux";
import planetsReducers from './planetsReducers'
import residentsReducers from './residentsReducers'

export default combineReducers({
    planets: planetsReducers,
    residents: residentsReducers
})
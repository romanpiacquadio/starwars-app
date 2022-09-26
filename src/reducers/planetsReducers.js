import { 
    START_PLANETS_RETRIEVE,
    RETRIEVE_PLANETS_OK,
    RETRIEVE_PLANETS_ERROR,    
    FILTER_PLANETS
} from '../types'

const initialState = {
    planets: [],
    planetsFiltered:[],
    error: false,
    loading: false,
    loaded: false
}

const planetsReducers = function (state = initialState, action) {
    switch (action.type) {
        case START_PLANETS_RETRIEVE:
            return {
                ...state,
                error: false,
                loading: action.payload
            }
        case RETRIEVE_PLANETS_OK:
            return {
                ...state,
                planets: action.payload,
                planetsFiltered: action.payload,
                loading: false,
                loaded: true
            }
        case RETRIEVE_PLANETS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case FILTER_PLANETS: {
            return {
                ...state,
                planetsFiltered: state.planets.filter(planet => planet.name.toLowerCase().startsWith(action.payload.toLowerCase()))
            }
        }
        default: 
            return {
                ...state
            }
    }
}

export default planetsReducers
import { 
    START_PLANETS_RETRIEVE,
    RETRIEVE_PLANETS_OK,
    RETRIEVE_PLANETS_ERROR    
} from '../types'

const initialState = {
    planets: [],
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
                loading: false,
                loaded: true
            }
        case RETRIEVE_PLANETS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: 
            return {
                ...state
            }
    }
}

export default planetsReducers
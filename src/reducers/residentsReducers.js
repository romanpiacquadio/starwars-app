import {
    START_RESIDENTS_RETRIEVE,
    RETRIEVE_RESIDENTS_OK,
    RETRIEVE_RESIDENTS_ERROR
} from '../types'

const initialState = {
    residents: {},
    error: false,
    loading: false,
    loaded: false
}

const residentsReducer = function (state = initialState, action) {
    switch (action.type) {
        case START_RESIDENTS_RETRIEVE:
            return {
                ...state,
                error: false,
                loading: action.payload
            }
        case RETRIEVE_RESIDENTS_OK:
            return {
                ...state,
                residents: action.payload,
                loading: false,
                loaded: true
            }
        case RETRIEVE_RESIDENTS_ERROR:
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

export default residentsReducer
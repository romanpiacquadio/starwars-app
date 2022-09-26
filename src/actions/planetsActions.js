import axios from 'axios'
import { useSelector } from 'react-redux'
import { 
    START_PLANETS_RETRIEVE,
    RETRIEVE_PLANETS_OK,
    RETRIEVE_PLANETS_ERROR,
    FILTER_PLANETS    
} from '../types'

export function getPlanetsAction() {
    return async (dispatch) => {
        dispatch ( getPlanets() )
        try {
            let planets = []
            let url = `https://swapi.dev/api/planets/?page=1`
            while(url){
                const {data} = await axios.get(url)
                planets = planets.concat(data.results)
                dispatch ( getPlanetsOk(planets) )
                url = data.next
            }
            
        } catch (error) {
            dispatch ( getPlanetsError(error) )
        }
    } 
}

export function filterPlanetsAction(keyword) {
    return async (dispatch) => {
        dispatch (getFilteredPlanets(keyword))
    }
}

const getPlanets = () => ({
    type: START_PLANETS_RETRIEVE,
    payload: true
})

const getPlanetsOk = (planets) => ({
    type: RETRIEVE_PLANETS_OK,
    payload: planets
})

const getPlanetsError = () => ({
    type: RETRIEVE_PLANETS_ERROR,
    payload: true
})

const getFilteredPlanets = (keyword) => ({
    type: FILTER_PLANETS,
    payload: keyword
})
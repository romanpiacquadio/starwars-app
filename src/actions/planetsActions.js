import axios from 'axios'
import { 
    START_PLANETS_RETRIEVE,
    RETRIEVE_PLANETS_OK,
    RETRIEVE_PLANETS_ERROR    
} from '../types'

export function getPlanetsAction() {
    return async (dispatch) => {
        dispatch ( getPlanets() )
        try {
            let planets = []
            let next = true
            let i = 1
            while(next){
                console.log(`fetcheando planets vez nro ${i}`)
                const {data} = await axios.get(`https://swapi.dev/api/planets/?page=${i}`)
                planets = planets.concat(data.results)
                next = data.next
                i = i + 1
            }
            dispatch ( getPlanetsOk(planets) )
            
        } catch (error) {
            dispatch ( getPlanetsError(error) )
        }
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
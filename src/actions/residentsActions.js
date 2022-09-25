import axios from 'axios'
import {
    START_RESIDENTS_RETRIEVE,
    RETRIEVE_RESIDENTS_OK,
    RETRIEVE_RESIDENTS_ERROR
} from '../types'

export function getResidentsAction() {
    return async (dispatch) => {
        dispatch( getResidents() )
        try {
            let residents = {}
            let next = true
            let i = 1
            while(next){
                console.log(`fetcheando residents vez nro ${i}`)
                const {data} = await axios.get(`https://swapi.dev/api/people/?page=${i}`)
                for (let j=0; j<data.results.length; j++) {
                    residents = { ...residents, [data.results[j].url]: [data.results[j]][0] }
                }
                next = data.next
                i = i + 1
            }
            dispatch( getResidentsOk(residents) )

        } catch (error) {
            dispatch( getResidentsError() )
        }
    }
}

const getResidents = () => ({
    type: START_RESIDENTS_RETRIEVE,
    payload: true
})

const getResidentsOk = (residents) => ({
    type: RETRIEVE_RESIDENTS_OK,
    payload: residents
})

const getResidentsError = () => ({
    type: RETRIEVE_RESIDENTS_ERROR,
    payload: true
})
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
            let url = 'https://swapi.dev/api/people/?page=1'
            while(url){
                const {data} = await axios.get(url)
                for (let j=0; j<data.results.length; j++) {
                    residents = { ...residents, [data.results[j].url]: [data.results[j]][0] }
                }
                dispatch( getResidentsOk(residents) )
                url = data.next
            }

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
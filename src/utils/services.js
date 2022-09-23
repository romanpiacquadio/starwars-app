import axios from "axios"

export const getPlanets = async () => {
    let planets = []
    let follow = true
    let i = 1
    while(follow){
        const {data} = await axios.get(`https://swapi.dev/api/planets/?page=${i}`)
        planets.push(data.results)
        follow = data.next
        i = i + 1
    }
}

export const getResidents = () => {
  
}
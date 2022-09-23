import Planet from "./Planet"
import { useDispatch, useSelector } from 'react-redux';
import { getPlanetsAction } from '../actions/planetsActions'
import { useEffect } from 'react'

const Planets = () => {
  const dispatch = useDispatch();
  const getPlanets = () => (dispatch ( getPlanetsAction() ))
  
  const loading = useSelector(state => state.planets.loading) // es un boolean
  const planets = useSelector(state => state.planets.planets) // es un array
  const error = useSelector(state => state.planets.error) // es un boolean
  const loaded = useSelector(state => state.planets.loaded) // es un boolean
  
  useEffect(() => {
    console.log('holaa')
    const bringAllPlanets = async () => {
      await getPlanets()
      console.log('entro al usefect')
    }
    if(!loaded){
      bringAllPlanets()
    }
  }, [])

  return (
    <div className="planets">
      {loading && <h4>LOADING...</h4>}
      {planets.length >= 1 && planets.map( (planet, index) => <Planet 
        key={index}
        name={planet.name}
        rotperiod={planet.rotation_period}
        orbperiod={planet.orbital_period}
        diameter={planet.diameter}
        climate={planet.climate}
        />)}
      {error && <h4>There was an error...</h4>}
    </div>
  )
}

export default Planets
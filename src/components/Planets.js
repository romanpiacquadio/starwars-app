import Planet from "./Planet"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getPlanetsAction } from '../actions/planetsActions'
import { getResidentsAction } from "../actions/residentsActions";

const Planets = () => {
  const dispatch = useDispatch();
  const getPlanets = () => (dispatch ( getPlanetsAction() ))
  const getResidents = () => (dispatch ( getResidentsAction() ))
  
  const loadingPlanets = useSelector(state => state.planets.loading) // es un boolean
  const planets = useSelector(state => state.planets.planets) // es un array
  const errorPlanets = useSelector(state => state.planets.error) // es un boolean
  const loadedPlanets = useSelector(state => state.planets.loaded) // es un boolean

  const loadedResidents = useSelector(state => state.residents.loaded)
  
  useEffect(() => {
    const bringAllPlanets = async () => {
      await getPlanets()
      console.log('entro al bringallplanets')
    }
    if(!loadedResidents) {
      getResidents()
    }
    if(!loadedPlanets){
      bringAllPlanets()
    }
  }, [])

  return (
    <div className="planets">
      {loadingPlanets && <h4>LOADING...</h4>}
      {planets.length >= 1 && planets.map( (planet, index) => <Planet 
        key={index}
        name={planet.name}
        rotperiod={planet.rotation_period}
        orbperiod={planet.orbital_period}
        diameter={planet.diameter}
        climate={planet.climate}
        />)}
      {errorPlanets && <h4>There was an error...</h4>}
    </div>
  )
}

export default Planets
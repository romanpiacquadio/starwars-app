import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getPlanetsAction } from '../actions/planetsActions'
import { getResidentsAction } from "../actions/residentsActions"
import Planet from "./Planet"
import Pagination from "./Pagination"
import InputFilter from './InputFilter'


const Planets = () => {
  const [filter, setFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [planetsPerPage, setPlanetsPerPage] = useState(10)

  const dispatch = useDispatch();
  const getPlanets = () => (dispatch ( getPlanetsAction() ))
  const getResidents = () => (dispatch ( getResidentsAction() ))
  
  const loadingPlanets = useSelector(state => state.planets.loading) // es un boolean
  const errorPlanets = useSelector(state => state.planets.error) // es un boolean
  const planets = useSelector(state => state.planets.planets) // es un array
  const loadedPlanets = useSelector(state => state.planets.loaded) // es un boolean

  const loadedResidents = useSelector(state => state.residents.loaded)

  const indexOfLastPlanet = currentPage * planetsPerPage
  const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage
  const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
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
    <div className="planets__page">
      <InputFilter filter={filter} setFilter={setFilter}/>
      <div className="planets">
        {loadingPlanets && <h4>LOADING...</h4>}
        {planets.length >= 1 && filter === '' && currentPlanets.map( (planet, index) => <Planet 
          key={index}
          name={planet.name}
          rotperiod={planet.rotation_period}
          orbperiod={planet.orbital_period}
          diameter={planet.diameter}
          climate={planet.climate}
          />)}
        {errorPlanets && <h4>There was an error...</h4>}
      </div>
      <Pagination paginate={paginate} planetsPerPage={planetsPerPage} totalPlanets={planets.length}/>
    </div>
  )
}

export default Planets
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getPlanetsAction } from '../actions/planetsActions'
import { getResidentsAction } from "../actions/residentsActions"
import Planet from "./Planet"
import Pagination from "./Pagination"
import InputFilter from './InputFilter'
import { useLocation, useParams } from 'react-router-dom'


const Planets = () => {
  const search = useLocation().search
  const page = new URLSearchParams(search).get('page') || 1
  
  const [currentPage, setCurrentPage] = useState(page)
  const [planetsPerPage, setPlanetsPerPage] = useState(10)

  const dispatch = useDispatch();
  const getPlanets = () => (dispatch ( getPlanetsAction() ))
  const getResidents = () => (dispatch ( getResidentsAction() ))
  
  const loadingPlanets = useSelector(state => state.planets.loading) // es un boolean
  const errorPlanets = useSelector(state => state.planets.error) // es un boolean
  const planets = useSelector(state => state.planets.planetsFiltered) // es un array
  const loadedPlanets = useSelector(state => state.planets.loaded) // es un boolean

  const loadedResidents = useSelector(state => state.residents.loaded)

  const indexOfLastPlanet = currentPage * planetsPerPage
  const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage
  const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet)

  
  useEffect(() => {
    const bringAllPlanets = async () => {
      await getPlanets()
    }
    if(!loadedPlanets){
      bringAllPlanets()
    }
    if(!loadedResidents) {
      getResidents()
    }
    setCurrentPage(page)
  }, [page])

  return (
    <div className="planets__page">
      <div className='planets__input'>
        <InputFilter />
      </div>
      <div className="planets">
        {loadingPlanets && <p>LOADING...</p>}
        {planets.length >= 1 && currentPlanets.map( planet => <Planet 
          key={planet.url}
          name={planet.name}
          rotperiod={planet.rotation_period}
          orbperiod={planet.orbital_period}
          diameter={planet.diameter}
          climate={planet.climate}
          />)}
        {errorPlanets && <h4>There was an error...</h4>}
        {errorPlanets===false && loadingPlanets===false &&planets.length === 0 && <h4>No planets found with that name</h4> }
      </div>
      <Pagination planetsPerPage={planetsPerPage} totalPlanets={planets.length} currentPage={currentPage}/>
    </div>
  )
}

export default Planets
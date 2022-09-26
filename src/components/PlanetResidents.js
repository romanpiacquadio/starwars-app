import { useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"

const PlanetResidents = () => {
  const {name} = useParams()
  const planet = useSelector(state => state.planets.planets.find(planet=>planet.name===name))
  const residents = useSelector(state => state.residents.residents)
  
  return (
    <div className="planet__resident">
      <h4 className="planet__resident__name">{planet?.name}</h4>
      <div className="planet__resident__attribute">
        <h5>Residents: </h5>
        {planet.residents.length>0 ? 
          <ul>
              {planet.residents.map( resident => 
                <Link to={`/residents/${residents[resident]?.name}`} key={resident}>
                  <li>{residents[resident]?.name}</li>    
                </Link>
              )}  
          </ul> :
          <p>There are no residents to show</p>
        }
      </div>
    </div>
  )
}

export default PlanetResidents
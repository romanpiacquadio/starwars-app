import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const PlanetResidents = () => {
  const {name} = useParams()
  const planet = useSelector(state => state.planets.planets.find(planet=>planet.name===name))
  
  return (
    <div className="planet">
      <h4 className="planet__name">{planet.name}</h4>
      <div className="planet__attribute">
        <h5>Residents: </h5>
        <ul>
          {planet.residents.map(resident => <li>{resident}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default PlanetResidents
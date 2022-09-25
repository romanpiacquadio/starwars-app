import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Resident = () => {
  const residentName = useParams().name
  const resident = useSelector(state => Object.values(state.residents.residents).find(resident => resident.name === residentName))
  const {name, height, birth_year, hair_color, gender } = resident

  return (
    <div className="planet">
    <h4 className="planet__name">{name}</h4>
    <div className="planet__attribute">
      <h5>Gender: </h5>
      <p>{gender}</p>
    </div>
    <div className="planet__attribute">
      <h5>Hair Color: </h5>
      <p>{hair_color}</p>
    </div>
    <div className="planet__attribute">
      <h5>Birth Year: </h5>
      <p>{birth_year}</p>
    </div>
    <div className="planet__attribute">
      <h5>Height: </h5>
      <p>{height}</p>
    </div>
  </div>
  )
}

export default Resident
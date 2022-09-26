import { Link } from "react-router-dom"

const Planet = ({name, rotperiod, orbperiod, diameter, climate}) => {
  return (
    <div className="planet">
      <Link to={`/planet/${name}`}><h4 className="planet__name">{name}</h4></Link>
      <div className="planet__attribute">
        <h5>Rotation Period: </h5>
        <p>{rotperiod}</p>
      </div>
      <div className="planet__attribute">
        <h5>Orbital Period: </h5>
        <p>{orbperiod}</p>
      </div>
      <div className="planet__attribute">
        <h5>Diameter: </h5>
        <p>{diameter}</p>
      </div>
      <div className="planet__attribute">
        <h5>Climate: </h5>
        <p>{climate}</p>
      </div>
    </div>
  )
}

export default Planet
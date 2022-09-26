import { Link, useParams } from "react-router-dom"

const Breadcrumb = () => {
  const {residentName, planetName} = useParams()
  console.log(planetName, residentName)
  
  return (
    <ul>
      <Link to={`/planets?page=1`}>All Planets</Link>
      {planetName && 
      <>
        <span> / </span>
        <Link to={`/planet/${planetName}`}>{planetName}</Link>
      </>}
      {residentName && 
      <>
        <span> / </span>
        <Link>{residentName}</Link>
      </>}
      
    </ul>
  )
}

export default Breadcrumb
import { Link, useParams, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const Breadcrumb = () => {
  const {pathname} = useLocation()
  const {name} = useParams()

  const residents = useSelector(state => state.residents.residents)
  const planets = useSelector(state => state.planets.planets)

  const breadcrumbFunction = (pathname, name) => {
    if(pathname.startsWith('/residents/')){
      const {homeworld} = Object.values(residents).find(resident => resident.name === name)
      const homeworldName = planets.find(planet => planet.url === homeworld).name
      return homeworldName
    }
  }
  
  return (
    <ul className='layout__searchbar__list'>
      <Link to={`/planets?page=1`}>All Planets</Link>
      
      {pathname.startsWith('/planet/') && 
      <>
        <span> / </span>
        <Link to={`/planet/${name}`} className="layout__searchbar__selected">{name}</Link>
      </>}
      
      {pathname.startsWith('/residents/') && 
      <>
        <span> / </span>
        <Link to={`/planet/${breadcrumbFunction(pathname,name)}`}>{breadcrumbFunction(pathname,name)}</Link>
        <span> / </span>
        <Link to={`/residents/${name}`} className="layout__searchbar__selected">{name}</Link>
      </>}
      
    </ul>
  )
}

export default Breadcrumb
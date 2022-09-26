import { Link } from "react-router-dom"

const Breadcrumb = () => {
  return (
    <div>
      <Link to={`/`}>All Planets / </Link>
      <Link to={`/planets`}> Planet Name / </Link>
      <Link to={`/residents`}> Resident Name </Link>
    </div>
  )
}

export default Breadcrumb
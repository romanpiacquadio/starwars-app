import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

const Layout = () => {

  return (
    <div className='layout'>
        <div className='layout__header'>
          <h2 className='layout__title'> <Link to='/'>Star-Wars App </Link></h2>
          <nav className='layout__searchbar'>
              <Breadcrumb />
          </nav>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout
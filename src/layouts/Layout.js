import { Outlet } from 'react-router-dom'
import Searchbar from '../components/Searchbar'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

const Layout = () => {

  return (
    <div className='layout'>
        <Link to='/'><h2 className='layout__title'> Star-Wars App </h2></Link>
        <nav className='layout__searchbar'>
            <Searchbar />
            <Breadcrumb />
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout
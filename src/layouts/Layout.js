import { Outlet } from 'react-router-dom'
import Searchbar from '../components/Searchbar'

const Layout = () => {

  return (
    <div className='layout'>
        <h2 className='layout__title'> Star-Wars App </h2>
        <nav className='layout__searchbar'>
            <Searchbar />
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout
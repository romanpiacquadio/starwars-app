import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Planets from './components/Planets'
import PlanetResidents from './components/PlanetResidents'
import Resident from './components/Resident'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
  <BrowserRouter>
    <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Planets/>} />
            <Route path='planets' element={<Planets/>} />
            <Route path='planet/:name' element={<PlanetResidents/>} />
            <Route path='residents/:name' element={<Resident/>} />
          </Route>
        </Routes>
    </Provider>
  </BrowserRouter>
  );
}

export default App;

import { HashRouter, Routes, Route } from 'react-router-dom'
import PokeDex from './components/PokeDex'
import PokeDetails from './components/PokeDetails'
import ProtectedRoutes from './components/ProtectedRoutes'
import LogIn from './components/LogIn'
import './App.css'

function App() {


  return (
    <HashRouter>
      <div>

        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<PokeDex />} />
            <Route path='/pokedex/:id' element={<PokeDetails />} />
          </Route>

        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
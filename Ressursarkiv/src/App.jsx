import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Ressurser from './components/Ressurser'
import RessurserIndex from './components/RessurserIndex'
import Ressurs from './components/Ressurs'

function App() {

  return (
    <Routes>
        <Route index element={<Layout/>} />
        <Route path="ressurser/*" element={<Ressurser />}>
          <Route index element={<RessurserIndex/>}/>
          <Route path=':slug' element={<Ressurs />}/>
        </Route>
    </Routes>
  )
}

export default App

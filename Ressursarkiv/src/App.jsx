import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Resurrser from './components/Resurrser'
import ResurrserIndex from './components/ResurrserIndex'
import Resurrs from './components/Resurrs'

function App() {

  return (
    <Routes>
        <Route index element={<Layout/>} />
        <Route path="resurrser/*" element={<Resurrser />}>
          <Route index element={<ResurrserIndex/>}/>
          <Route path=':slug' element={<Resurrs />}/>
        </Route>
    </Routes>
  )
}

export default App

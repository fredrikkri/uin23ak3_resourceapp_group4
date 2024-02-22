import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Ressurs from './components/Ressurs'

function App() {

  return (

    <Routes>
        <Route index element={<Layout />} />
          <Route path=":slug" element={<Ressurs />}>
        </Route>
    </Routes>

  )
}

export default App

import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Ressurs from './components/Ressurs'
import resources from './js/ressurser'

function App() {

  return (

    <Layout resources={resources}>
      <Routes>
          <Route path="/" element={<Navigate to={resources[0].category} />} />
          <Route path=":slug" element={<Ressurs resources={resources} />}>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App

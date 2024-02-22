import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Ressurs from './components/Ressurs'

function App() {

  return (

    <Layout>
      <Routes>
          <Route path={index}>Index</Route>
          <Route path=":slug" element={<Ressurs />}>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App

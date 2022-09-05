import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';


// import de pages
import Home from './pages/Home/home'
import Institucional from './pages/Institucional/Institucional'
import Login from './pages/Login/login'

// import do react routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import de styles
import './styles/navbar.css'
import './styles/root.css'


function Rotas(){

  return (
    <Router>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/login" element= {<Login />} />
          <Route path="/institucional" element= {<Institucional />} />
        </Routes>
    </Router>
  )
}

export default Rotas

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)

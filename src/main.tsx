import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';


// import de pages
import Home from './pages/Home/home'
import Institucional from './pages/Institucional/Institucional'
import Login from './pages/Login/login'

import Rotas from './routes/rotas'

// import de styles
import './styles/navbar.css'
import './styles/root.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <Rotas/>
  </React.StrictMode>
)

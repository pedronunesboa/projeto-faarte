import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './pages/Institucional/Institucional'
import { BrowserRouter } from 'react-router-dom';
import './styles/navbar.css'
import './styles/root.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

import Home from '../pages/Home/home'
import Institucional from '../pages/Institucional/Institucional'
import Login from '../pages/Login/login'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Rotas(){

    return (
        <BrowserRouter>
            <Routes>          
              <Route path="/" element={<Home/> } />
              <Route path="/institucional" element={<Institucional />} />
              <Route path="/login" element={<Login /> } />    
            </Routes>
        </BrowserRouter>
    )
}

  export default Rotas
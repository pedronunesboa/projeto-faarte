import Home from '../pages/Home/home'
import Institucional from '../pages/Institucional/Institucional'
import Login from '../pages/Login/login'
import Cadastro from '../pages/Cadastro/cadastro'
import Header from '../components/Header/header'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Rotas(){

    return (
        <BrowserRouter>
            <Routes>          
              <Route path="/" element={<Home/> } />
              <Route path="/institucional" element={<Institucional />} />
              <Route path="/login" element={<Login /> } />    
              <Route path="/cadastrar" element={<Cadastro /> } /> 
              <Route path="/header" element={<Header /> } />
            </Routes>
        </BrowserRouter>
    )
}

  export default Rotas
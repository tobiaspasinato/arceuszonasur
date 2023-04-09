import React from 'react';
import './App.css';
import './Functions/table'
import BasicExample from './Functions/table';
import NavBar from './Functions/NavBar'
import Pokedex from './Pages/Pokedex';
import TablaDeTipos from './Pages/TablaDeTipos';
import Home from './Pages/Home';
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/tabladetipos' element={<TablaDeTipos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

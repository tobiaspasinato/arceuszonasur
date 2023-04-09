import React from 'react';
import './App.css';
import './Functions/table'
import BasicExample from './Functions/table';
import NavBar from './Functions/NavBar'
import TablaDeTipos from './Pages/TablaDeTipos';
import Pokedex from './Pages/Pokedex';
import Home from './Pages/Home';
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tabladetipos' element={<TablaDeTipos />} />
          <Route path='/pokedex' element={<Pokedex />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

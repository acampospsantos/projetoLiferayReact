import React from 'react';
import Routes from "./Routes";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Pagina1 from './2.segundaPagPadrao/1ºPágina/Pag1';
import Pagina2 from './2.segundaPagPadrao/2ºPágina/Pag2';
import Pagina3 from './2.segundaPagPadrao/3ºPágina/Pag3';
import Pagina4 from './2.segundaPagPadrao/4ºPágina/Pag4';
import Pagina5 from './2.segundaPagPadrao/5ºPágina/Pag5';
import Pagina6 from './2.segundaPagPadrao/6ºPágina/Pag6';
import Pagina7 from './2.segundaPagPadrao/7ºPágina/Pag7';

import Pagina8 from './3.terceiraPagPadrao/8ºPágina/Pag8';
import Pagina9 from './3.terceiraPagPadrao/9ºPágina/Pag9';

import Pagina10 from './4.quartaPagPadrao/10ºPágina/Pag10';
import Pagina11 from './4.quartaPagPadrao/11ºPágina/Pag11';


function App() {
  return (
    <div className="App">
      <Pagina11 />
    </div>
  );
}


export default App;

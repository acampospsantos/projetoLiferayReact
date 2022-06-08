import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Header from './2.segundaPagPadrao/4ºPágina/Cabeçalho';
import MiddleContent from './2.segundaPagPadrao/4ºPágina/Conteudo';
import Footer from './2.segundaPagPadrao/4ºPágina/Rodapé';
import React from 'react';



function App() {
  return (
    <div className="App">
      

        <Header /> {/* Cabeçalho */}

        <MiddleContent /> {/* Conteúdo do meio da página */}

        <Footer /> {/* Rodapé */}

      

    </div>
  );
}

export default App;

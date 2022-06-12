import React from 'react';

import Header from './Cabeçalho.js';
import MiddleContent from './Conteudo.js';
import Footer from './Rodapé.js';

const QuartaPagina= () => {
    return (
        <div className='Pag'>
            <Header /> {/* Cabeçalho */}

            <MiddleContent /> {/* Conteúdo do meio da página */}

            <Footer /> {/* Rodapé */}
        </div>
    )
}

export default QuartaPagina;
import Header from './Cabeçalho.js';
import MiddleContent from './Conteudo.js';
import Footer from './Rodapé.js';

function TerceiraPagina() {
    return (
        <div className='Pag'>
            <Header /> {/* Cabeçalho */}

            <MiddleContent /> {/* Conteúdo do meio da página */}

            <Footer /> {/* Rodapé */}
        </div>
    )
}

export default  TerceiraPagina;
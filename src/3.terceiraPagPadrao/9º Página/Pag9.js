import Header from "./3.terceiraPagPadrao\Cabeçalho.css";
import MiddleContent from "./3.terceiraPagPadrao\Conteudo.css";
import Footer from "./3.terceiraPagPadrao\Rodapé.css";

function NonaPagina() {
    return (
        <div className='Pag'>
            <Header /> {/* Cabeçalho */}

            <MiddleContent /> {/* Conteúdo do meio da página */}

            <Footer /> {/* Rodapé */}
        </div>
    )
}

export default NonaPagina;
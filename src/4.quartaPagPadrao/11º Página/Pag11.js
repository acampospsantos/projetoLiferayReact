import Header from "./4.quartaPagPadrao\Cabeçalho.css";
import MiddleContent from "./4.quartaPagPadrao\Conteudo.css";
import Footer from "./4.quartaPagPadrao\Rodapé.css";

function DecimaPrimeiraPagina() {
    return (
        <div className='Pag'>
            <Header /> {/* Cabeçalho */}

            <MiddleContent /> {/* Conteúdo do meio da página */}

            <Footer /> {/* Rodapé */}
        </div>
    )
}

export default DecimaPrimeiraPagina;
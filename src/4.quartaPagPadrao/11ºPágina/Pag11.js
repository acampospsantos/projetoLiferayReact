import Header from "./Cabeçalho";
import MiddleContent from "./Conteudo";
import Footer from "./Rodapé";

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
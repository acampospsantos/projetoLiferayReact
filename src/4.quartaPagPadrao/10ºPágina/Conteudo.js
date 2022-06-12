
import './Conteudo.css';

function MiddleContent() {
    return (
        <div className="conteudo">
            <div className="centerConteudo">

                <div className="box-botoes">
                    <div className="botoes">
                        <ul>
                            <li> <a href="#"> Ações promovidas </a> </li>
                            <li> <a href="#"> Criar nova ação </a> </li>
                            <li> <a href="#"> Sair </a> </li>                            
                        </ul>
                    </div>
                </div>

                <div className="portalVoluntario">
                    <h1> PORTAL VOLUNTÁRIO </h1>
                </div>

                <div className="acoesInscritas">
                    <h2> AÇÕES INSCRITAS </h2>
                </div>

                <div className="boxAcoesss">
                    <p> -- Box das Ações que o Voluntário tá participando -- </p>
                </div>

            </div>

        </div>
    )
}

export default MiddleContent;

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

                <div className="portalVoluntarioo">
                    <h1> PORTAL VOLUNTARIO </h1>
                </div>

                <div className="vagasDisponiveis">
                    <h2> VAGAS DISPONÍVEIS </h2>
                </div>

                <div className="boxAcoessss">
                    <p> -- Box das Ações que o Voluntário pode participar -- </p>
                </div>

            </div>

        </div>
    )
}

export default MiddleContent;

import './Conteudo.css';

function MiddleContent() {
    return (
        <div className="conteudo">
            <div className="centerConteudo">

                <div className="box-botoes">
                    <div className="botoes">
                        <ul>
                            <li> <a href="#"> Ações Inscritas </a> </li>
                            <li> <a href="#"> Vagas Disponíveis </a> </li>
                            <li> <a href="#"> Sair </a> </li>                            
                        </ul>
                    </div>
                </div>

                <div className="portalOrganizacaoo">
                    <h1> PORTAL ORGANIZAÇÃO </h1>
                </div>

                <div className="crie">
                    <h2> CRIE UMA NOVA AÇÃO VOLUNTÁRIA </h2>
                </div>               

                <div className="boxAcoess">
                    <p> -- Box da possível nova Ação criada -- </p>
                </div>

            </div>

        </div>
    )
}

export default MiddleContent;
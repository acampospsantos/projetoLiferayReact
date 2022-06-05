
import './Conteudo.css';

function MiddleContent() {
    return (
        <div className="conteudo">
            <div className="centerConteudo">

                <div className="box-botoes">
                    <div className="botoes">
                        <ul>
                            <li> <a href="#"> Início </a> </li>
                            <li> <a href="#"> Voluntários </a> </li>
                            <li> <a href="#"> Organizações </a> </li>
                            <li> <a href="#"> Entrar </a> </li>
                        </ul>
                    </div>
                </div>

                <div className="tituloPag2">
                    <h1> VOLUNTÁRIOS </h1>
                </div>

                <div className="textoPag2">
                    <h3> O voluntariado é sobre trocas - de experiência, conhecimento, serviço, apoio, cidadania, carinho, amor... Existindo um ganho não apenas para a organização, mas também para o voluntário. É uma experiência para todos independe de gênero, raça ou etnia que permite conhecer novas realidades, se engajar em uma causa social, contribuir com suas habilidades, e até mesmo desenvolver novas competências. </h3>
                </div>

                <div className="vemSerVoluntario">
                    <a href='#'> <h3> Vem ser um voluntário </h3> </a>
                </div>

            </div>

        </div>
    )
}

export default MiddleContent;
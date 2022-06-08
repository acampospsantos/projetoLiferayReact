
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

                <div className="tituloPag1">
                    <h1> SISTEMA DE VOLUNTARIADO LIFERAY </h1>
                </div>

                <div className="meiota">

                    <div className="textoPag1">
                        <h3> A Liferay Inc. foi formada por alguns engenheiros de software, uma mãe e um futuro advogado em um ambiente cercado por móveis doados por uma igreja local. Eles tinham um objetivo simples: criar tecnologia útil que beneficiasse clientes, parceiros e funcionários, e construir uma organização que ajudasse outras pessoas a alcançar seu máximo potencial. Vamos fazer a diferença juntos? </h3>
                    </div>

                    <div className="participeTambem">
                        <a href="#"> <h3> Participe, também! </h3> </a>
                    </div>

                    <div className="peopleImage">
                        <img src="https://www-cdn.liferay.com/cdn-cgi/image/format=contain,format=auto,metadata=none,onerror=redirect,width=1280/documents/10182/306482941/About+Us+Hero+Image+Draft1-0.png/d3163603-aa50-853b-a9a2-23a101c4a356/About+Us+Hero+Image+Draft1-0.png?t=1609363790840&download=true" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MiddleContent;
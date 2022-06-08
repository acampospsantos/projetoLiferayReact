
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

                <div className="tituloPag4">
                    <h1> FAÇA SEU LOGIN </h1>
                </div>

                <div className="form">
                    <form>
                        <div className="items-form">
                            <input placeholder="CPF/CNPJ..." type="text" />
                            <h4> CPF/CNPJ </h4>
                            <input placeholder="Senha..." type="text" />
                            <h4> SENHA </h4>
                            <p> Esqueceu a senha? </p>
                        </div>
                        <input type="submit" />
                    </form>
                </div>

                <div className="semContaVol">
                    <a href=".\2.segundaPagPadrao\5ºPágina\Pag5.js"> <h3> Ainda não possui uma conta? Vem ser um Voluntário </h3> </a>
                </div>

                <div className="semContaOrg">
                    <a href=".\2.segundaPagPadrao\5ºPágina\Pag5.js"> <h3> Ainda não possui uma conta? Vem ser uma Organização </h3> </a>
                </div>

            </div >

        </div >
    )
}

export default MiddleContent;
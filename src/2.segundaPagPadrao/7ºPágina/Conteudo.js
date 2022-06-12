
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

                <div className="tituloPag7">
                    <h1> RECUPERAR SENHA </h1>
                    <h4> Insira o CPF ou CNPJ associado a sua conta de acesso. </h4>
                </div>

                <div className="form">
                    <form>
                        <div className="items-form">
                            <input placeholder="CPF/CNPJ..." type="text" />
                            <h4> CPF/CNPJ </h4>
                            <input placeholder="NOVA SENHA..." type="text" />
                            <h4> NOVA SENHA </h4>
                            <input placeholder="DIGITE NOVAMENTE..." type="text" />
                            <h4> DIGITE NOVAMENTE </h4>                          
                        </div>
                        <input type="submit" />
                    </form>
                </div>
               

                <div className="imagem">
                    <img src="https://www.liferay.com/documents/10182/0/unify+LXC.svg/cec85a80-dd11-ded0-91e9-66abe1e09bcb/unify+LXC.svg?t=1647020822439&download=true"/>
                </div>

            </div>

        </div>
    )
}

export default MiddleContent;
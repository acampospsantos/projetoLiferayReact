
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

                <div className="tituloPag5">
                    <h1> CADASTRO VOLUNTÁRIO </h1>
                </div>

                <div className="form">
                    <form>
                        <div className="items-form">                            
                            <input placeholder="CPF..." type="text" />  
                            <h4> CPF </h4>                          
                            <input placeholder="Nome..." type="text" />
                            <h4> NOME </h4>                            
                            <input placeholder="Email..." type="text" />
                            <h4> EMAIL </h4>                            
                            <input placeholder="Telefone..." type="text" />
                            <h4> TELEFONE </h4>                            
                            <input placeholder="Gênero..." type="text" />
                            <h4> GÊNERO </h4>                            
                            <input placeholder="Senha..." type="text" />
                            <h4> SENHA </h4>                            
                            <input placeholder="Confirmar..." type="text" />
                            <h4> CONFIRMAR </h4>
                            <p> Use oito ou mais caracteres com uma combinação de letras, números e símbolos </p>
                        </div>                        
                        <input type="submit" />                        
                    </form>
                </div>

            </div>

        </div>
    )
}

export default MiddleContent;
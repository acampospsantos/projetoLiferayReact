
import './Cabeçalho.css';

function Header() {
    return (
        <div className="main">
            <div className="center">
                <div className="menu">

                    <div className="logo">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Liferay-logo-full-color-2x.png'/>
                    </div>

                    <div className="item-menu">
                        <a href="#"> <img src='https://cdn-icons-png.flaticon.com/512/56/56763.png?w=360' /> </a>                        
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Header;
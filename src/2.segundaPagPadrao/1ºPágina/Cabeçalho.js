
import './Cabeçalho.css';

function Header() {
    return (
        <div className="main">
            <div className="center">
                <div className="menu">

                    <div className="logo">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Liferay-logo-full-color-2x.png'/>
                    </div>

                    <div className="endereço">
                        <img src="https://w7.pngwing.com/pngs/255/760/png-transparent-black-location-icon-illustration-computer-icons-adress-miscellaneous-desktop-wallpaper-location.png" /> 
                        <h3> R. dos Arcos, 160, PE, 52061-180 </h3>
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
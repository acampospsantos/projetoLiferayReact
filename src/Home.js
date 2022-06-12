import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1> Página Inicial </h1>
            <nav>
                <ul>
                    <li> <Link to="/pag1"> Página 1 </Link> </li>
                    <li> <Link to="/pag2"> Página 2 </Link> </li>
                    <li> <Link to="/pag3"> Página 3 </Link> </li>
                    <li> <Link to="/pag4"> Página 4 </Link> </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';

import Home from "./Home";

import Página1 from "./2.segundaPagPadrao/1ºPágina/Pag1";
import Página2 from "./2.segundaPagPadrao/2ºPágina/Pag2";
import Página3 from "./2.segundaPagPadrao/3ºPágina/Pag3";
import Página4 from "./2.segundaPagPadrao/4ºPágina/Pag4";
import Página5 from "./2.segundaPagPadrao/5ºPágina/Pag5";
import Página6 from "./2.segundaPagPadrao/6ºPágina/Pag6";
import Página7 from "./2.segundaPagPadrao/7ºPágina/Pag7";



const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home } path="/" exact/>          

            <Route component = { Página1 } path="/pag1"/>           

            <Route component = { Página2 } path="/pag2"/>    

            <Route component = { Página3 } path="/pag3"/>    

            <Route component = { Página4 } path="/pag4"/>    

            <Route component = { Página5 } path="/pag5"/>    

            <Route component = { Página6 } path="/pag6"/>    

            <Route component = { Página7 } path="/pag7" />     
        </BrowserRouter>
    )
}

export default Routes;
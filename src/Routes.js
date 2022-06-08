import { Switch, Route } from 'react-router-dom';

import Página1 from "./2.segundaPagPadrao/1ºPágina";
import Página2 from "./2.segundaPagPadrao/2ºPágina/Pag2";
import Página3 from "./2.segundaPagPadrao/3ºPágina/Pag3";
import Página4 from "./2.segundaPagPadrao/4ºPágina/Pag4";
import Página5 from "./2.segundaPagPadrao/5ºPágina/Pag5";
import Página6 from "./2.segundaPagPadrao/6ºPágina/Pag6";
import Página7 from "./2.segundaPagPadrao/7ºPágina/Pag7";
import Página8 from "./2.segundaPagPadrao";
import Página9 from "./2.segundaPagPadrao";
import Página10 from "./2.segundaPagPadrao";
import Página11 from "./2.segundaPagPadrao";

export default () => {

    return(
        <Switch>
            <Route exact path="/pag1">
                <Página1 />
            </Route>

            <Route exact path="/pag2">
                <Página2 />
            </Route>

            <Route exact path="/pag3">
                <Página3 />
            </Route>

            <Route exact path="/pag4">
                <Página4 />
            </Route>

            <Route exact path="/pag5">
                <Página5 />
            </Route>

            <Route exact path="/pag6">
                <Página6 />
            </Route>

            <Route exact path="/pag7">
                <Página7 />
            </Route>

            <Route exact path="/pag8">
                <Página8 />
            </Route>

            <Route exact path="/pag9">
                <Página9 />
            </Route>

            <Route exact path="/pag10">
                <Página10 />
            </Route>

            <Route exact path="/pag11">
                <Página11 />
            </Route>

        </Switch>
    );
}
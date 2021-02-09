// import React from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom';
import signup from '../components/signup/SignUp';
import recover from '../components/recover/Recover';
import App from '../App';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/registrarse" component={signup} />
            <Route exact path="/recuperar" component={recover} />
        </BrowserRouter>
    )
}

export default Rutas;

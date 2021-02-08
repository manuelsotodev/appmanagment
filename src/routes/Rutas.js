// import React from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom';
import Create from '../components/CreateAccount';
import App from '../App';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/Create" component={Create} />
        </BrowserRouter>
    )
}

export default Rutas;

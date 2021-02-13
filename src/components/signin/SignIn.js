import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header.js'
import Form from './Form'
import './SignIn.css'


class SingIn extends Component {
    render(){
        return(
          <div className='sticky-to'>
              <Header/>
              <div className='formulario mx-auto'>
                <h2 className="font-weight-light mb-5 mt-5 text-center">App Managment</h2>
                <Form />
                <div className='row mt-4  mb-5 text-center d-flex justify-content-center'>  
                    <Link to="/recuperar" className="col-sm-3 text-muted text-decoration-none ">¿Olvidaste tu contraseña?</Link>
                    <Link to="/registrarse" className="col-sm-3 text-primary text-decoration-none">Crea una cuenta</Link>
                </div>
              </div>
          </div>  
        );
    }
}

export default SingIn
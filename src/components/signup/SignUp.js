import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header.js';
import './SignUp.css';


class SingUp extends Component {
    render(){
        return(
          <div className='sticky-top'>
              <Header/>
              <div className='formulario mx-auto'>
                <h2 className="font-weight-light mb-5 mt-5 text-center">App Managment</h2>
                <form>
                    <div className="form-group input-group-sm">
                        <label >Nombre</label>
                        <input type="txt" className="form-control rounded-0" id="exampleInputName" aria-describedby="nameHelp"></input>
                    </div>
                    <div className="form-group input-group-sm">
                        <label>Correo</label>
                        <input type="email" className="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group input-group-sm">
                        <label>Contraseña</label>
                        <input type="password" className="form-control rounded-0" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-sm btn-primary shadow btn-block mt-5 rounded-0">Registrarse</button>
                </form>
                <div className='row mt-4 text-center d-flex justify-content-center'>
                    <p className="col-sm-3 text-muted text-decoration-none ">Si ya tienes cuenta, ingresa <Link to="/"><a href='?' className="ml-0 text-success text-decoration-none ">aquí</a></Link></p>
                    
                </div>
              </div>
          </div>  
        );
    }
}

export default SingUp
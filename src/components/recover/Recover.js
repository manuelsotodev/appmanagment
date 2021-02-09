import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header.js';
import './Recover.css';


class Recover extends Component {
    render(){
        return(
          <div className='sticky-to'>
              <Header/>
              <div className='formulario mx-auto'>
                <h2 className="font-weight-light mb-5 mt-5 text-center">App Managment</h2>
                <form>
                    <div className="form-group input-group-sm">
                        <label>Correo</label>
                        <input type="email" className="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <button type="submit" className="btn btn-sm btn-warning text-white shadow btn-block mt-5 rounded-0">Recuperar contraseña</button>
                </form>
                <div className='row mt-4 mb-5 text-center d-flex justify-content-center'>
                    <p className="col-sm-3 text-muted text-decoration-none ">Si ya tienes cuenta, ingresa <Link to="/"><a className="ml-0 text-success text-decoration-none ">aquí</a></Link></p>
                    <Link to="/registrarse">
                        <a className="col-sm-3 text-primary text-decoration-none ">Crea una cuenta</a>
                    </Link>
                </div>
              </div>
          </div>  
        );
    }
}

export default Recover
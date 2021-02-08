import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './header/Header.js'


class Create extends Component {
    render(){
        return(          
        <div className='sticky-to'>
            <Header/>
            <div className='formulario mx-auto'>
            <h2 className="font-weight-light mb-5 mt-5 text-center">App Managment</h2>
            <form>

                <div className="form-group input-group-sm">
                    <label for="exampleInputName1">Nombre</label>
                    <input type="text" className="form-control rounded-0" id="exampleInputName1"></input>
                </div>
                <div className="form-group input-group-sm">
                    <label for="exampleInputEmail1">Correo</label>
                    <input type="email" className="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div className="form-group input-group-sm">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control rounded-0" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" className="btn btn-sm btn-primary shadow btn-block mt-5 rounded-0">Registrarse</button>
            </form>
            <div className='row mt-4 mb-5 text-center d-flex justify-content-center'>  
                <p className="text-muted text-decoration-none ">si ya tienes cuenta Ingresa</p>
                <Link to="/">
                    <a className="col-sm-2 text-primary text-decoration-none ">Aquí</a>
                </Link>
            </div>
            </div>
        </div>  
        );
    }
}

export default Create
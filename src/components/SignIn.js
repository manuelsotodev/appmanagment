import React, {Component} from 'react';
import Header from './header/Header.js'
import './SignIn.css'


class SingIn extends Component {
    render(){
        return(
          <div className='sticky-to'>
              <Header/>
              <div className='formulario mx-auto'>
                <h2 className="font-weight-light mb-5 mt-5 text-center">App Managment</h2>
                <form>
                    <div className="form-group input-group-sm">
                        <label for="exampleInputEmail1">Correo</label>
                        <input type="email" className="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="form-group input-group-sm">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control rounded-0" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" className="btn btn-sm btn-success shadow btn-block mt-5 rounded-0">Ingresar</button>
                </form>
                <div className='row mt-4 mb-5 text-center d-flex justify-content-center'>
                    <a href='?' className="col-sm-3 text-muted text-decoration-none ">¿Olvidaste tu contraseña?</a>
                    <a href='?' className="col-sm-3 text-primary text-decoration-none ">Crea una cuenta</a>
                </div>
              </div>
          </div>  
        );
    }
}

export default SingIn
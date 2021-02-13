import React, {useState} from 'react';
import firebase from '../../util/Firebase'
import { Link } from 'react-router-dom';
import Header from '../header/Header.js';
import 'firebase/auth'
import "firebase/firestore";



const Form = (props) => {

    const [email, setEmail ] = useState('');

    const submit = async ()=>{
        firebase.auth().sendPasswordResetEmail(email).then(function() {
            // Email sent.
            console.log("Contraseña enviada...")
        }).catch(function(error) {
            // An error happened.
            console.log(error)
          });
      
    }

    return(
        <div className='sticky-to'>
        <Header/>
        <div className='formulario mx-auto'>
          <h2 className="font-weight-light mb-5 mt-5 text-center">App Managment</h2>
                <div>
                    <div className="form-group input-group-sm">
                        <label>Correo</label>
                        <input type="email" className="form-control rounded-0" id="inputEmail" onChange={ (e)=> setEmail(e.target.value)}></input>
                    </div>
                    <button  onClick={submit} className="btn btn-sm btn-warning text-white shadow btn-block mt-5 rounded-0">Recuperar contraseña</button>
                </div>
                <div className='row mt-4 mb-5 text-center d-flex justify-content-center'>
                    <p className="col-sm-3 text-muted text-decoration-none ">Si ya tienes cuenta, ingresa <Link to="/" className="ml-0 text-success text-decoration-none ">aquí</Link></p>
                    <Link to="/registrarse" className="col-sm-3 text-primary text-decoration-none ">Crea una cuenta</Link>
                </div>
            </div>
        </div>  
    )
}

export default Form;
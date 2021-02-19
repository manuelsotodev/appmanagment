import React, {useState} from 'react';
import firebase from '../../util/Firebase'
import 'firebase/auth'
import "firebase/firestore";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../header/Header.js';
import ReactNotification, {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'



const Form = () => {

    const {handleSubmit } = useForm();
    const [email, setEmail ] = useState('');

    
    const notiRecSuccess = () => {
        store.addNotification({
            title: "Solicitud Exitosa",
            message: "Solicitud de resablecimiento de contraseña enviada al correo: "+email,
            type: "info",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
          setEmail("")
    }

    const notiFailed = (eT, eM) => {
        store.addNotification({
            title: eT,
            message: eM,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
          setEmail("")
    }


     const onSubmit = async ()=>{
        firebase.auth().sendPasswordResetEmail(email).then(function() {
            notiRecSuccess()
            
        }).catch(function(error) {
            console.log(error)
            notiFailed(error.code, error.message)

        });
    }

    return(
        <div className='sticky-to'>
        <ReactNotification className="fixed-top mt-4"/>
        <Header/>
        <div className='formulario mx-auto'>
          <h2 className="font-weight-light mb-5 mt-5 text-center">App Managment</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group input-group-sm">
                        <label>Correo</label>
                        <input type="email" value={email} className="form-control rounded-0" id="inputEmail" onChange={ (e)=> setEmail(e.target.value)}></input>
                    </div>
                    <button type="submit" className="btn btn-sm btn-warning text-white shadow btn-block mt-5 rounded-0">Recuperar contraseña</button>
                </form>
                <div className='row mt-4 mb-5 text-center d-flex justify-content-center'>
                    <p className="col-sm-3 text-muted text-decoration-none ">Si ya tienes cuenta, ingresa <Link to="/" className="ml-0 text-success text-decoration-none ">aquí</Link></p>
                    <Link to="/registrarse" className="col-sm-3 text-primary text-decoration-none ">Crea una cuenta</Link>
                </div>
            </div>
        </div>  
    )
}

export default Form;
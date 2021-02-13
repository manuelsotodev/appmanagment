import React, {useState} from 'react';
import firebase from '../../util/Firebase'
import 'firebase/auth'
import "firebase/firestore";
import { Link } from 'react-router-dom';
import Header from '../header/Header.js';

const Form = (props) => {
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const submit = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async () => {
            console.log("Usuario registrado.")
            const user = firebase.auth().currentUser
            await user.sendEmailVerification()
            .then( async () => {
                // Email sent.
                console.log("verifciacion enviada...")
                await firebase.firestore().collection('usuarios').add({
                    Name: name,
                    Email: email,
                    Password: password,
                    ImageUrl: ''
                }).then(() =>{
                    console.log("Datos almacenados")
                }).catch( (error) =>{
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode,errorMessage)
                })
            }).catch( (error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
        });
    }

    return(
        <div>
            <Header />
            <div className='formulario mx-auto'>
                <h2 className="font-weight-light mb-5 mt-5 text-center">App Managment</h2>
                <div className="form-group input-group-sm">
                    <label >Nombre</label>
                    <input type="txt" className="form-control rounded-0" id="inputName" onChange={ (e)=> setName(e.target.value)}></input>
                </div>
                <div className="form-group input-group-sm">
                    <label>Correo</label>
                    <input type="email" className="form-control rounded-0" id="inputEmail1" onChange={ (e)=> setEmail(e.target.value)}></input>
                </div>
                <div className="form-group input-group-sm">
                    <label>Contraseña</label>
                    <input type="password" className="form-control rounded-0" id="inputPassword" onChange={ (e)=> setPassword(e.target.value)}></input>
                </div>
                <button onClick={submit} className="btn btn-sm btn-primary shadow btn-block mt-5 rounded-0">Registrarse</button>
                <div className='row mt-4 text-center d-flex justify-content-center'>
                    <p className="col-sm-3 text-muted text-decoration-none ">Si ya tienes cuenta, ingresa <Link to="/" className="ml-0 text-success text-decoration-none ">aquí</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Form;
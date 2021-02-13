import React, {useState} from 'react';
import firebase from '../../util/Firebase'
import 'firebase/auth'
import "firebase/firestore";



const Form = (props) => {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const submit = async ()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in
            // ...
            console.log("sesion iniciada...")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    return(
        <div>
            <div className="form-group input-group-sm">
                <label>Correo</label>
                <input type="email" className="form-control rounded-0" id="inputEmail" onChange={ (e)=> setEmail(e.target.value)}></input>
            </div>
            <div className="form-group input-group-sm">
                <label>Contraseña</label>
                <input type="password" className="form-control rounded-0" id="inputPassword" onChange={ (e)=> setPassword(e.target.value)}></input>
            </div>
            <button onClick={submit} className="btn btn-sm btn-success shadow btn-block mt-5 rounded-0">Ingresar</button>
        </div>
    )
}

export default Form;
import React, {useState} from 'react';
import firebase from '../../util/Firebase'
import 'firebase/auth'
import "firebase/firestore";
import  {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'



const Form = (props) => {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const notiSuccess = () => {
        store.addNotification({
            title: "Bienvenido",
            message: "Ahora puedes acceder a todas las funciones",
            type: "success",
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
          setPassword("")
    }

    const notiVerification = () => {
        store.addNotification({
            title: "Cuenta no verificada",
            message: "Verifica tu cuenta e intenta más tarde",
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
          setPassword("")
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
          setPassword("")
    }
    

    const submit = async ()=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in
            // ...
            console.log(user.user.emailVerified)
            if(user.user.emailVerified){
                notiSuccess()
            }
            else{
                notiVerification()
            }
            
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            notiFailed(errorCode, errorMessage)
        });
    }

    return(
        <div>
            <div className="form-group input-group-sm">
                <label>Correo</label>
                <input type="email" value={email} className="form-control rounded-0" id="inputEmail" onChange={ (e)=> setEmail(e.target.value)}></input>
            </div>
            <div className="form-group input-group-sm">
                <label>Contraseña</label>
                <input type="password" value={password} className="form-control rounded-0" id="inputPassword" onChange={ (e)=> setPassword(e.target.value)}></input>
            </div>
            <button onClick={submit} className="btn btn-sm btn-success shadow btn-block mt-5 rounded-0">Ingresar</button>
        </div>
    )
}

export default Form;
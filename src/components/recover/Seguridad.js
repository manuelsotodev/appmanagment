import React, {useState, useEffect} from 'react'; 
import { Redirect } from 'react-router-dom';
import firebase from '../../util/Firebase'
import 'firebase/auth'
import Loader from '../loader/Loader.js'
import Form from './Form'


const Seguridad = () =>{

    let [seguridad, setSeguridad] = useState(false);
    let [loading, setLoading] = useState(true);

    
    useEffect(() =>{
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                if(user.emailVerified){
                    setSeguridad(true)
                    setLoading(false)
                }else{
                    setSeguridad(false)
                    setLoading(false)
                }
            }else{
                setSeguridad(false)
                setLoading(false)
            }
        })
    },[])
    

    if(loading){
        return(
            <Loader />
        )
    }
    return (
        <div>
            {seguridad && <Redirect to="/" />}
            <Form />
        </div>

    );
    
}

export default Seguridad
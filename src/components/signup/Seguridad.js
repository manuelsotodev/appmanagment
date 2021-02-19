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
        let isActive = true;
        firebase.auth().onAuthStateChanged((user) =>{
            if(isActive){
                if(user){
                    if(user.emailVerified){
                        setSeguridad(true)
                        setTimeout(()=>{
                            setLoading(false)
                          }, 1000)
                    }else{
                        setSeguridad(false)
                        setTimeout(()=>{
                            setLoading(false)
                          }, 1000)
                    }
                }else{
                    setSeguridad(false)
                    setTimeout(()=>{
                        setLoading(false)
                      }, 1000)
                }
            }

        })
        return () => {
            isActive = false;
        };
    },[])
    

    if(loading){
        return(
            <Loader />  
        );
    }else{
        return (
            <div>
                {seguridad && <Redirect to="/" />} 
                <Form />
            </div>
        );
    }

    
}

export default Seguridad
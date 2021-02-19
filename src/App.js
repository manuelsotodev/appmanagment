import React, {useState, useEffect} from 'react'; 
import './App.css';
import firebase from './util/Firebase'
import 'firebase/auth'
import Loader from './components/loader/Loader.js'
import SignIn from './components/signin/SignIn.js'
import Inicio from './components/inicio/Inicio.js'
import ReactNotification from 'react-notifications-component'

function App() {
  let load;
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
          setLoading(true)
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


  if (loading) {
    load = <Loader />;
  } else {
    if(seguridad){
      load = <Inicio />
    }else{
      load = <SignIn />;
    }

  }

  return (
    <div>
      {load}
      <ReactNotification className="fixed-top mt-4"/>
      
    </div>);

}

export default App;

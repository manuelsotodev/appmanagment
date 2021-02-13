import React, {useState, useEffect} from 'react'; 
import './App.css';
import firebase from './util/Firebase'
import 'firebase/auth'
import Loader from './components/loader/Loader.js'
import SignIn from './components/signin/SignIn.js'
import Inicio from './components/inicio/Inicio.js'

function App() {
  let load;
  let [seguridad, setSeguridad] = useState(false);
  let [loading, setLoading] = useState(true);

  
  useEffect(() =>{
      firebase.auth().onAuthStateChanged((user) =>{
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
      })
      
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

  return (<div>{load}</div>);

}

export default App;

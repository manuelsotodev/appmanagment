import React, {Component} from 'react';
import firebase from '../../util/Firebase'
import 'firebase/auth'


class Inicio extends Component {

    submit = async ()=>{
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
        });
    }


    render(){
        return(
          <div className='sticky-top'>
              <h1>Inicio</h1>
              <button onClick={this.submit} className="btn btn-sm btn-danger shadow  rounded-0">Salir</button>
          </div>  
        );
    }
}

export default Inicio
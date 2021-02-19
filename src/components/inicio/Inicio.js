import React, {Component} from 'react';
import firebase from '../../util/Firebase'
import 'firebase/auth'
import './inicio.css'
import avatar from '../../assets/avatar.png'


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

            <div className="d-flex justify-content-start header-container fixed-top w-100 bg-dark" style={{color: "#e3f2fd"}}>

              <div className="imgProfile m-3 ml-2 p-1">
                <img src={avatar} alt="" className="rounded-circle img-thumbnail" ></img>
              </div> 

              

              <div class="row align-self-start mt-4 p-0">
                <div class="col-12">
                  <h6 className="font-weight-bold"> Nombre Completo <button className="btn badge btn-info">Edit</button></h6>
                </div>
                
                <div class="col-4">
                  <p className="font-weight-light">Admin</p>
                </div>
              </div>


              <div className="ml-auto p-2">
                <button onClick={this.submit} className="btn btn-sm btn-danger shadow  rounded-0">Salir</button>
              </div> 

            </div>
            
          </div>

        );
    }
}

export default Inicio
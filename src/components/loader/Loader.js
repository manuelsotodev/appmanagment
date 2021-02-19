import React, {Component} from 'react';
import loader from '../../assets/loader.gif';
import './Loader.css'

class Loader extends Component {

    render(){
        return (
            <div className="loader">
              <header className="loader-header">
                <img src={loader} className="loader-logo mx-auto mt-0" alt="logo" />
                <h2 className="font-weight-light">App Managment</h2>
              <div className="fixed-bottom">
                <p className="font-weight-light mb-0">Powered by</p>
                <p className="font-weight-normal mt-0">DSC Cutonalá</p>
              </div>
            </header>
          </div>
        );
    }
}

export default Loader
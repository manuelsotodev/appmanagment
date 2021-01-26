import React, {Component} from 'react';
import './Header.css'


class Header extends Component {
    render(){
        return(
          <div className='sticky-top'>
              <div className="header-container fixed-top">
                <div className="header-color m-0 .d-inline p-3 bg-primary"></div>
                <div className="header-color m-0 .d-inline p-3 bg-success"></div>
                <div className="header-color m-0 .d-inline p-3 bg-warning"></div>
                <div className="header-color m-0 .d-inline p-3 bg-danger"></div>
              </div>
          </div>  
        );
    }
}

export default Header
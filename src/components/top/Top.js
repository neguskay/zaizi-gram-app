import React, { Component } from 'react';
import Logo from './Logo';

//import './App.css';
//import zaizi.logo from  '.zaizi.logo.ico';


// function updateTopComponents(){
//     return (
        
//       )
// }

class NavArea extends Component{
  render(){
    return(
      <div className="navbar-nav-scroll">
        <ul className="navbar-nav bd-navbar-new flex-row">
          <li className="nav-item">L1</li>
          <li className="nav-item">L1</li>
          <li className="nav-item">L1</li>
          <li className="nav-item">L1</li>
        </ul>
      </div>
    );
  }

}

class Top extends Component{
    render(){
      return(
        <div className="navbar span">
          <Logo/>
          <NavArea/>
        </div>
      );
    }
}

export default Top;
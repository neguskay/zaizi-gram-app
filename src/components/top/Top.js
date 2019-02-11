import React, { Component } from 'react';
//import './App.css';
//import zaizi.logo from  '.zaizi.logo.ico';


function updateTopComponents(){
    return (
        <div className="TopArea">
          <header className="LogoArea">
            <img src={require('./zaizi.logo.ico')} className="App-logo" alt="logo" />
            <p>
              ZaiziGram
            </p>
            <a
              className="App-link"
              href="https://www.zaizi.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              The gram
            </a>
          </header>
        </div>
      );
}

class Top extends Component{
    render(){
      return(updateTopComponents());
    }
}

export default Top;
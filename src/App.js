import React, { Component } from 'react';
//import logo from './logo.svg';
import Top from './components/top/'
import './App.css';

class App extends Component {
  render() {
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            ZaiziGram
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );*/
    return(
      <div className="App">
        <Top/>
      </div>
    );
  }
}

export default App;

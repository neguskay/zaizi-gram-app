import React, { Component } from 'react';
import Top from './components/main/top/Top.js'
import Middle from './components/main/middle/Middle.js'
import './App.css';
//


class App extends Component {
  render() {

    return(
      <div >
        <div>
          <Top/>
        </div>
        <hr>
        </hr>
        <div>
          <Middle/>
          
        </div>
 
        
      </div>

      

    );
  }
}

export default App;

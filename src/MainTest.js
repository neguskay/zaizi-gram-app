import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/_store/store.js';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/other/SignIn.js';
import SignUp from './components/other/SignUp';

class MainTest extends Component{
    render(){

      return(
        <Provider store={store}>
            <BrowserRouter >
                <React.Fragment>
                    <Route exact path="/" component={App}/>
                    <Route path="/signin" component={SignIn}/> 
                    <Route path="/signup" component={SignUp}/>
                </React.Fragment>
                    
            </BrowserRouter>
        </Provider>    
        
      );
    }
}

export default MainTest
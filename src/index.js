import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import { App } from './app';
import { store } from './redux/_store'
import * as serviceWorker from './serviceWorker'
import { history } from './_helpers'

import { LoginPage } from './pages/login'
import { RegisterPage } from './pages/register'
import { HomePage }  from './pages/home'

ReactDOM.render(
  <Provider store={store}>
      
      {/* <Router history={history}>
        <Route path="/" component={App}>
        
            {/* <PrivateRoute exact path="/" component={HomePage} /> */}
            {/* <Route path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
        
        </Route>
      </Router> 
    */}
    <App/>
  </Provider>, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

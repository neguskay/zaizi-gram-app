import  React, { Component } from 'react'
import { Router, Route, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'

import { LoginPage } from '../pages/login'
import { RegisterPage } from '../pages/register'
import { HomePage }  from '../pages/home'

import { alertActions } from '../redux/_actions'
import { history } from '../_helpers/History'
//import { alertActions } from '../_actions';
import { PrivateRoute } from '../_routes/PrivateRoute'



class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      alert : ""
   }

    const { dispatch } = this.props;
    history.listen((location, action) => {
        //clear alert on location change
        dispatch(alertActions.clear())
        console.log("Listening..")
    });
  }

  render() {
    return (
    
        <Router history={history}>
          <React.Fragment>
            <PrivateRoute exact path="/" component={HomePage} /> 
            <Route path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            </React.Fragment>
        </Router>
      
    )
  }
}

function mapStateToProps(state) {
  const { alert } = state
  return {
      alert
  }
}

const connectedApp = connect(mapStateToProps)(App)
//export { connectedApp as App }
export { App as App }


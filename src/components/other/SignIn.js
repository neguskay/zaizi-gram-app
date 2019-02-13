import React, { Component } from 'react'
//import Middle from './Middle';
//import MainMiddle from './MainMiddle';

class SignIn extends Component{
    render(){
      return(
          <div  className="row justify-content-md-center" >
              <form className="form-signin">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                    <div className="checkbox mb-3">
                    <label>
                        <input name="isGoing" type="checkbox"/> Remember Me
                    </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>
          </div>    
        
      );
    }
}

export default SignIn;


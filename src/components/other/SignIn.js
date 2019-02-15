import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInUser } from '../../redux/_actions/AuthActions'
//import Middle from './Middle';
//import MainMiddle from './MainMiddle';

class SignIn extends Component{

    // componentDidMount(){
    //     this.props.signInUser();
    // }
    

    //Contructor
    constructor(props) {
        super(props);
    
        this.state = {
           email: "",
           password: ""
        };
    }

    //Validate form
    validateSignInForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;

        //Check database for password
    }

    //Handle event changes
    handleSignInChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
        
    }

    //Signin in Handler
    handleSignIn = event => {
        event.preventDefault()
        // let username = this.refs.email.value
        // let password = this.refs.password.value
        // this.props.onSignIn(username, password)

        //Print Sign Info
        //console.log("Email: ", this.state.email);
        //console.log("Password: ", this.state.password);
        event.preventDefault();
        let { email, password } = this.state;
        this.props.signInUser(email, password);
        this.setState({
            email: '',
            password: ''
        });

    }


    //Show Render the bloody thing ;-)
    render(){
        let email = this.state.email;
        let password = this.state.password;
        let {isSignInPending, isSignInSuccess, loginError} = this.props;

        console.log("Popropsppsp: ", this.props);

      return(
          <div  className="row justify-content-md-center" >
              <form className="form-signin">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                    <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                    <hr></hr>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="email" className="form-control" onChange={event => this.setState({email: event.target.value}) }  
                        value={email} placeholder="Email address" required autoFocus>
                    </input>
                    <hr></hr>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="password" className="form-control" value={password}
                        placeholder="Password" required onChange={event => this.setState({password: event.target.value}) } >
                    </input>
                    <hr></hr>
                    <div className="checkbox mb-3">
                        <label>
                            <input name="isGoing" type="checkbox"/> Remember Me
                        </label>
                    </div>
                    <hr></hr>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSignIn} >Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>
          </div>    
        
      );
    }
}

// const mapStateToProps = state =>( {
//     signInUserCredentials: state.signIn.userSignInCredentials
// })

const mapStateToProps = (state) => {
    return {
      isSignInPending: state.isSignInPending,
      isSignInSuccess: state.isSignInSuccess,
      loginError: state.loginError
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: (email, password) => dispatch(signInUser(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
//export default SignIn;

//

/**
 * 
class SignIn extends Component{
    

    //Contructor
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
    }

    //Validate form
    validateSignInForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;

        //Check database for password
    }

    //Handle event changes
    handleSignInChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
        
    }

    //Signin in Handler
    handleSignIn = event => {
        event.preventDefault()
        // let username = this.refs.email.value
        // let password = this.refs.password.value
        // this.props.onSignIn(username, password)

        //Print Sign Info
        console.log("Email: ", this.state.email);
        console.log("Password: ", this.state.password);
    }


    //Show Render the bloody thing ;-)
    render(){

        console.log("Email: ", this.state.email);

      return(
          <div  className="row justify-content-md-center" >
              <form className="form-signin">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                    <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                    <hr></hr>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="email" className="form-control"  onChange={this.handleSignInChange}  value={this.state.email} placeholder="Email address" required autoFocus></input>
                    <hr></hr>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="password" className="form-control" value={this.state.password}
                        placeholder="Password" required onChange={this.handleSignInChange} ></input>
                    <hr></hr>
                    <div className="checkbox mb-3">
                        <label>
                            <input name="isGoing" type="checkbox"/> Remember Me
                        </label>
                    </div>
                    <hr></hr>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSignIn} disabled={!this.validateSignInForm()}>Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>
          </div>    
        
      );
    }
}

export default SignIn;

 */
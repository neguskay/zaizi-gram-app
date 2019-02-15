import React, { Component } from 'react'


class SignUp extends Component{
    //Contructor
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          name: "",
          password: "",
          passwordConfirmed: ""
        };
    }

    //Validate form
    validateSignUpForm() {
        return (this.state.email.length > 0 && this.state.password.length > 0 && this.state.name.length>0) || (this.state.password === this.state.passwordConfirmed);
    }

    //Handle event changes
    handleSignUpChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
        
    }

    //Signin in Handler
    handleSignUp = event => {
        event.preventDefault()
        // let username = this.refs.email.value
        // let password = this.refs.password.value
        // this.props.onSignIn(username, password)

        //Print Sign Info
        console.log("Email: ", this.state.email);
        console.log("Password: ", this.state.password);
        console.log("Email: ", this.state.name);
        console.log("Password: ", this.state.passwordConfirmed);
    }


    render(){
        console.log("Email: ", this.state.email);

      return(
          <div  className="row justify-content-md-center" >
              <form className="form-signup">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                    <h1 className="h3 mb-3 font-weight-normal">Create A New Account</h1>
                    <hr></hr>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="name" id="name" className="form-control" placeholder="Your Full-Name" required autoFocus
                        onChange={this.handleSignUpChange}  value={this.state.name}></input>
                    <hr></hr>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="email" className="form-control" placeholder="your_email@address.com" required autoFocus
                        onChange={this.handleSignUpChange}  value={this.state.email} ></input>
                    <hr></hr>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" required
                        onChange={this.handleSignUpChange}  value={this.state.password} ></input>
                    <hr></hr>
                    <label htmlFor="inputPassword" className="sr-only">Confirm Password</label>
                    <input type="password" id="passwordConfirmed" className="form-control" placeholder="Confirm Password" required
                        onChange={this.handleSignUpChange}  value={this.state.passwordConfirmed}></input>
                        <hr></hr>
                        <div className="checkbox mb-3">
                            <label>
                                <input name="isGoing" type="checkbox"/> Tick To Accept Our Terms
                            </label>
                        </div>
                        
                    <hr></hr>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSignUp} disabled={!this.validateSignUpForm()}>Create Account</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>
          </div>    
        
      );
    }
}

export default SignUp;

/*/////////////////////////////////////////////////////
const Welcome = ({user, onSignOut})=> {
    // This is a dumb "stateless" component
    return (
      <div>
        Welcome <strong>{user.username}</strong>!
        <a href="javascript:;" onClick={onSignOut}>Sign out</a>
      </div>
    )
  }
  
class LoginForm extends React.Component {
    
    // Using a class based component here because we're accessing DOM refs
   
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    
    render() {
      return (
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Login" />
        </form>
      )
    }
  
}
  
  
class App extends React.Component {
    
    constructor(props) {
      super(props)
      // the initial application state
      this.state = {
        user: null
      }
    }
    
    // App "actions" (functions that modify state)
    signIn(username, password) {
      // This is where you would call Firebase, an API etc...
      // calling setState will re-render the entire app (efficiently!)
      this.setState({
        user: {
          username,
          password,
        }
      })
    }
    
    signOut() {
      // clear out user from state
      this.setState({user: null})
    }
    
    render() {
      // Here we pass relevant state to our child components
      // as props. Note that functions are passed using `bind` to
      // make sure we keep our scope to App
      return (
        <div>
          <h1>My cool App</h1>
          { 
            (this.state.user) ? 
              <Welcome 
               user={this.state.user} 
               onSignOut={this.signOut.bind(this)} 
              />
            :
              <LoginForm 
               onSignIn={this.signIn.bind(this)} 
              />
          }
        </div>
      )
      
    }
    
}
  
//ReactDOM.render(<App/>, document.getElementById("app"))*/
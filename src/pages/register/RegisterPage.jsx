import React, {Component} from 'react'
import { connect } from 'react-redux'
import {userActions} from '../../redux/_actions'
import Navbar from '../../components/NavBar';

class RegisterPage extends Component{
  constructor(props) {
    super(props)

    this.state = {
      //user : { 
        name: "",
        email: "",
        password: "",
        passwordConfirmed: "",
      //},
      isSubmitted: false
    }

    this.handleRegisterFormChange = this.handleRegisterFormChange.bind(this)
    this.handleRegisterFormSubmit = this.handleRegisterFormSubmit.bind(this)
  }

  //Validate form
  validateSignUpForm() {
      return (this.state.email.length > 0 && this.state.password.length > 0 && this.state.name.length>0) || (this.state.password === this.state.passwordConfirmed);
  }

  //Handle event changes
  handleRegisterFormChange = event => {
    console.log("In Handle register form change")
     
    const { name, value } = event.target;
    const { user } = this.state
    this.setState({
        //if (this.event.target.name
        //user: {
            //...user,
            [name]: value
        //}
    }) 
    console.log(this.state)  
  }

  //Signin in Handler
  handleRegisterFormSubmit = event => {
      event.preventDefault()
      console.log("In Handle register form submit")  
      console.log(this.state)
    
      this.setState({ 
        isSubmitted: true 
      })
      const user = {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password
      }
      //const { user } = this.state;
      const { dispatch } = this.props
      //TO-DO: Create a user object and parse it to dispatch to register 
      if (this.state.email && this.state.name && this.state.password) {
        console.log(this.state.email,"email")
        console.log(this.state.name, "name")
        console.log(this.state.password, 'password')
        dispatch(userActions.register(user))
      }
  }


  render(){
      //console.log("Email: ", this.state.email)

    const { registering  } = this.props
    //const { user, isSubmitted } = this.state
    //const passwordConfirmed = ""

    return(
      <div>
          <Navbar/>
        
        <hr/>
        <div  className="row justify-content-md-center" >
            <form className="form-signup">
                <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                <h1 className="h3 mb-3 font-weight-normal">Create A New Account</h1>
                <hr></hr>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="name" id="name" name="name" className="form-control" placeholder="Your Full-Name" required autoFocus
                    onChange={this.handleRegisterFormChange}  value={this.email}>
                    
                </input>
                <hr></hr>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="your_email@address.com" required autoFocus
                    onChange={this.handleRegisterFormChange}  value={this.name} >
                    
                </input>
                <hr></hr>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="password" name="password" className="form-control" placeholder="Password" required
                    onChange={this.handleRegisterFormChange}  value={this.password} >
                    
                </input>
                <hr></hr>
                <label htmlFor="inputConfirmedPassword" className="sr-only">Confirm Password</label>
                <input type="password" id="passwordConfirmed" name="passwordConfirmed" className="form-control" placeholder="Confirm Password" required
                    onChange={this.handleRegisterFormChange}  value={this.passwordConfirmed}>
                                 
                </input>
                    <hr></hr>
                    <div className="checkbox mb-3">
                        <label>
                            <input name="isGoing" type="checkbox"/> Tick To Accept Our Terms
                        </label>
                    </div>
                    
                <hr></hr>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleRegisterFormSubmit}>Create Account</button>
                {registering && 
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                }
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
              </form>
        </div>    
      </div>
    );
  }
}

// {isSubmitted && !user.name &&
//   <div className="help-block">First Name is required</div>
// }

function mapStateToProps(state) {
  const { users, authentication } = state
  const { user } = authentication
  return {
      user,
      users
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage)
//export { connectedRegisterPage as RegisterPage }
export { connectedRegisterPage as RegisterPage };

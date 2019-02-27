import React, {Component} from 'react'
import { connect } from 'react-redux'
import {userActions} from '../../redux/_actions'

class RegisterPage extends Component{
  constructor(props) {
    super(props)

    this.state = {
      user : {
        email: "",
        name: "",
        password: "",
        passwordConfirmed: ""
      },
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
          user: {
              ...user,
              [name]: value
          }
      })  
  }

  //Signin in Handler
  handleRegisterFormSubmit = event => {
      event.preventDefault()
      console.log("In Handle register form submit")  
    
      this.setState({ 
        isSubmitted: true 
      })

      const { user } = this.state;
      const { dispatch } = this.props
      if (user.email && user.name && user.password) {
          dispatch(userActions.register(user))
      }
  }


  render(){
      //console.log("Email: ", this.state.email)

    const { registering  } = this.props
    const { user, isSubmitted } = this.state

    return(
        <div  className="row justify-content-md-center" >
            <form className="form-signup">
                <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                <h1 className="h3 mb-3 font-weight-normal">Create A New Account</h1>
                <hr></hr>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="name" id="name" className="form-control" placeholder="Your Full-Name" required autoFocus
                    onChange={this.handleRegisterFormChange}  value={user.email}>
                    {isSubmitted && !user.name &&
                      <div className="help-block">First Name is required</div>
                    }
                </input>
                <hr></hr>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="email" className="form-control" placeholder="your_email@address.com" required autoFocus
                    onChange={this.handleRegisterFormChange}  value={user.name} >
                    {isSubmitted && !user.email &&
                        <div className="help-block">Email is required</div>
                    }
                </input>
                <hr></hr>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="password" className="form-control" placeholder="Password" required
                    onChange={this.handleRegisterFormChange}  value={user.password} >
                    {isSubmitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }
                </input>
                <hr></hr>
                <label htmlFor="inputPassword" className="sr-only">Confirm Password</label>
                <input type="password" id="passwordConfirmed" className="form-control" placeholder="Confirm Password" required
                    onChange={this.handleRegisterFormChange}  value={user.passwordConfirmed}>
                    {isSubmitted && !user.passwordConfirmed &&
                        <div className="help-block">Password requires Confirmation</div>
                    }               
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
      
    );
  }
}

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
export { RegisterPage as RegisterPage };

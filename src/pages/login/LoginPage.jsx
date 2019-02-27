import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions, login } from '../../redux/_actions'


class LoginPage extends Component{
  
  //Constructor
  constructor(props) {
    super(props)

    // Reset the login statse
    this.props.dispatch(userActions.logout());

    this.state = {
      email: '',
      password: '',
      isSubmitted: false
    }
    
    //Bind to this contructor
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  //Validate form
  // validateSignInForm() {
  //     return this.email.length > 0 && this.password.length > 0;
  // }

  //Handle event changes
  handleLoginChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  //Signin in Handler
  handleLoginSubmit = event => {
      event.preventDefault()

      this.setState({ 
        isSubmitted: true 
      })
      
      const { email, password } = this.state    
      const { dispatch } = this.props

      if (email && password) {
          dispatch(userActions.login(email, password))
      }
      
  }

  render(){
    const { loggingIn }   = this.props
    const { email, password, isSubmitted } = this.state

    return(
        <div  className="row justify-content-md-center" >
          <form className="form-signin">
            <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
            <h1 className="h3 mb-3 font-weight-normal">Please Log In</h1>
            
            <hr></hr>

            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="email" className="form-control" placeholder="Email address" required autoFocus
              value={email} onChange={this.handleLoginChange}>                
            </input>
            
            <hr></hr>
            
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Password" required 
              value={password} onChange={this.handleLoginChange}>     
            </input>
            {isSubmitted && !password &&
              <div className="help-block">Password is required</div>
            }

            <hr></hr>

            <div className="checkbox mb-3">
                <label>
                    <input name="isGoing" type="checkbox"/> Remember Me
                </label>
            </div>

            <hr></hr>

            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleLoginSubmit} >Login In</button>
            {loggingIn && 
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="  />
            }
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
          </form>
        </div>    
    
    )
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication
  
  return {
      loggingIn
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login  : (email, password) => dispatch(login(email, password))
//   };
// }


const connectedLoginPage = connect(mapStateToProps)(LoginPage)

//export { connectedLoginPage as LoginPage}
//export { connectedLoginPage as LoginPage}
export { connectedLoginPage as LoginPage}

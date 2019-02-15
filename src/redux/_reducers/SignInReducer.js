
import { SIGN_IN_USER, SIGN_IN_ERROR, SIGN_IN_PENDING} from '../_actions/Types.js'
import { setSignInError, setSignInPending, setSignInSuccess } from '../_actions/AuthActions.js'

// const initialSignInState = {
    
//     signInRequestResults: [], //results from after the post to db has been made
//     userSignInCredentials: {} //user credentials used to sign in
// }

export function reducer(state = {
    isSignInSuccess: false,
    isSignInPending: false,
    loginError: null
  }, action) {
    switch (action.type) {
      case SIGN_IN_PENDING:
        console.log("AAAACCTION",action)
        return Object.assign({}, state, {
            isSignInPending: action.isSignInPending
        });
  
      case SIGN_IN_USER:
        return Object.assign({}, state, {
            isSignInSuccess: action.isSignInSuccess
        });
  
      case SIGN_IN_ERROR:
        return Object.assign({}, state, {
            loginError: action.loginError
        });
  
      default:
        return state;
    }
  }
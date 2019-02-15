import { SIGN_IN_USER, SIGN_IN_PENDING, SIGN_IN_ERROR } from './Types.js'

export function signInUser (email, password) {
    return dispatch =>{
        console.log("In Fecthing... loolza Signing")
        dispatch(setSignInPending(true));
        dispatch(setSignInSuccess(false));
        dispatch(setSignInError(null));

        // fetch("http(s)://5c5abc5d1041df0014b3ee3b.mockapi.io/test/")
        // .then(res => res.json())
        // .then(data => dispatch({
        //     type: SIGN_IN_USER,
        //     payload: data
        // })
        // );
        
        callSignInApi(email, password, error => {
            dispatch(setSignInPending(false));
            if (!error) {
              dispatch(setSignInSuccess(true));
            } else {
              dispatch(setSignInError(error));
            }
          });
    }
}

export function setSignInPending(isSignInPending) {
    return {
        type: SIGN_IN_PENDING,
        isSignInPending
    };
}
  
export function setSignInSuccess(isSignInSuccess) {
    return {
        type: SIGN_IN_USER,
        isSignInSuccess
    };
}
  
export function setSignInError(isSignInError) {
    return {
        type: SIGN_IN_ERROR,
        isSignInError
    }
}  

export function callSignInApi(email, password, callback) {
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin') {
        return callback(null);
      } else {
        return callback(new Error('Invalid email and password'));
      }
    }, 1000);
  }
  
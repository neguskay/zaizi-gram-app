import { SIGN_IN_USER, SIGN_IN_PENDING, SIGN_IN_ERROR } from './Types.js'

const axios = require('axios');
const testData = {
    "email": "Kailyn_Daniel@gmail.com",
    "password": "D8AnmVZMB2dhVam"
}


export function signInUser (email, password) {
    return dispatch =>{
        console.log("In Fecthing... loolza Signing")
        console.log("EEmaill:",email)
        console.log("PPasswordd",password)
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
        testSignInFetch(email,password)

        callSignInApi(email, password, error => {
            dispatch(setSignInPending(false));
            if (!error) {
              dispatch(setSignInSuccess(true));
            } else {
              dispatch(setSignInError(error));
            }
          });
    }
};

function testSignInFetch(email, password){
    console.log("email used:", email)
    console.log("email used:", password)
    console.log("InAxios Test")
    
    axios.get(`http://localhost:3004/users?email=${email}&password=${password}`)
        .then(
        function(response){
            console.log("Response",response)
            console.log("Response",response.data)
            if((response.status) === 200) {
                console.log("We was here")
            }
            
            //console.log(response.data)
        }
    )
    
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
  
import { SIGN_UP_NEW_USER} from '../_actions/Types.js'

const initialSignUpState = {
    
    signUpRequestResults: [], //results from after the post to db has been made
    userSignUpCredentials: {} //user credentials used to sign in
}

export default function( state = initialSignUpState, action ) {
    switch(action.type){
        //case SIGN_IN_USER:

        default: 
            return state
    }

}
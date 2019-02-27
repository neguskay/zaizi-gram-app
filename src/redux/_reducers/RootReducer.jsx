import { combineReducers } from 'redux';
import { users, registration, authentication, alert } from '../_reducers';

export const rootReducer = combineReducers({
  users,
  registration,
  authentication,
  alert
})

//export default rootReducer;
import { userConstants } from '../_constants'
import { history } from '../../_helpers'
import { userService } from '../../_services'
import { alertActions } from '../_actions'

export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
}

export function login(email, password) {
  console.log("IN ACTIONS/Login func")
  console.log(email, password)
  const user = {
    email,
    password
  }
  return dispatch => {
      dispatch(request({ email, password }))
      

      userService.login(email, password)
          .then(
              user => { 
                  dispatch(success(user))
                  history.push('/')
              },
              error => {
                  dispatch(failure(error))
                  dispatch(alertActions.error(error))
              }
          )
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

export function logout() {
  //userService.logout();
  console.log("IN ACTIONS/Logout func")
  return { type: userConstants.LOGOUT };
}

export function register(user) {
  console.log("IN ACTIONS/Register func")
  console.log(user)
  return dispatch => {
      dispatch(request(user));

      userService.register(user)
          .then(
              user => { 
                  dispatch(success());
                  history.push('/login');
                  dispatch(alertActions.success('Registration successful'));
              },
              error => {
                  dispatch(failure(error));
                  dispatch(alertActions.error(error));
              }
          )
  }

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

export function getAll() {
  console.log("IN ACTIONS/GetAll func")
  //console.log(email, password)
  return dispatch => {
      dispatch(request());

      // userService.getAll()
      //     .then(
      //         users => dispatch(success(users)),
      //         error => dispatch(failure(error))
      //     )
  }

  function request() { return { type: userConstants.GETALL_REQUEST } }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
export function _delete(id) {
  console.log("IN ACTIONS/Login func")
  console.log(id)
  return dispatch => {
      dispatch(request(id));

      // userService.delete(id)
      //     .then(
      //         user => { 
      //             dispatch(success(id));
      //         },
      //         error => {
      //             dispatch(failure(id, error));
      //         }
      //     )
  }

  function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
  function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
  function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}
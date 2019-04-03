import axios from 'react-native-axios'
import { API_URL } from '../constants/config'
import * as types from '../constants/ActionTypes'

export function login (data) {
  return dispatch => {
    dispatch(requestLogin())
    setTimeout(()=>{
      if (!data.username) {
        console.log('1')
        dispatch(loginFailure('Please enter your username'))
      } else if (!data.password) {
        console.log('12')
        dispatch(loginFailure('Please enter your password'))
      } else if (data.username !== 'admin' || data.password !== 'admin') {
        console.log('13')
        dispatch(loginFailure('Invalid username or password'))
      } else {
        dispatch(loginSuccess())
      }
    }, 1000)
  }
}

function requestLogin() {
  return {
    type: types.REQUEST_LOGIN
  }
}

function loginFailure(message) {
  return {
    type: types.LOGIN_FAILURE,
    message
  }
}

function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS
  }
}
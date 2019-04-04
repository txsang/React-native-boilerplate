import axios from 'react-native-axios'
import { API_URL } from '../constants/config'
import * as types from '../constants/ActionTypes'

export function login (data) {
  return dispatch => {
    dispatch(requestLogin())
    dispatch(userLogin(data))
  }
}

function requestLogin() {
  return {
    type: types.REQUEST_LOGIN
  }
}

function userLogin(data) {
  return {
    type: types.USER_LOGIN,
    data
  }
}
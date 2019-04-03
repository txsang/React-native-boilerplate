import * as types from '../constants/ActionTypes'

const initialState = {
  isAuth: false,
  message: null,
  loading: false
}

const Auth = (state = initialState, action = {}) => {
  console.log(action)
  switch(action.type){

    case types.REQUEST_LOGIN:
      return Object.assign({}, state, {
        loading: true,
        message: null
      })
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuth: true,
        message: null,
        loading: false
      })
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isAuth: false,
        message: action.message,
        loading: false
      })
    default:
      return state;
  }
}

export {Auth}
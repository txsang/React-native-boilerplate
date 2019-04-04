import * as types from '../constants/ActionTypes'
import Users from '../data/users'
import _ from 'lodash'

const initialState = {
  users: Users,
  currentUser: {},
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
    case types.USER_LOGIN:
      return Object.assign({}, state, {
        isAuth: login(action.data, state.users).isAuth,
        message: login(action.data, state.users).message,
        loading: login(action.data, state.users).loading,
        currentUser: login(action.data, state.users).currentUser
      })
    default:
      return state;
  }
}

function login(data, users) {
  if (!data.username) {
    return {
      isAuth: false,
      message: 'Please enter your username',
      loading: false,
      currentUser: {}
    }
  } else if (!data.password) {
    return {
      isAuth: false,
      message: 'Please enter your password',
      loading: false,
      currentUser: {}
    }
  } else {
    let indexUser = _.findIndex(users, (user) => (user.username === data.username && user.password === data.password))
    if (indexUser !== -1) {
      return {
        isAuth: true,
        message: null,
        loading: false,
        currentUser: Users[indexUser]
      }
    } else {
      return {
        isAuth: false,
        message: 'Invalid username or password',
        loading: false,
        currentUser: {}
      }
    }
  }
}

export {Auth}
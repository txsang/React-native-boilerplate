import * as types from '../constants/ActionTypes'
import News from '../data/news'

const initialState = {
  news: News
}

const NewsStore = (state = initialState, action = {}) => {
  switch(action.type){
    case types.REQUEST_LOGIN:
      return Object.assign({}, state, {
        loading: true,
        message: null
      })
    default:
      return state;
  }
}

export { NewsStore }
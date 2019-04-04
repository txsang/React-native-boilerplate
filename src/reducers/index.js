import { combineReducers } from 'redux';
import { Auth } from './auth'
import { NewsStore } from './news'
import { sceneReducer } from './scene-reducer'

const appReducer = combineReducers({
  Auth,
  NewsStore,
  sceneReducer
});

export {appReducer}
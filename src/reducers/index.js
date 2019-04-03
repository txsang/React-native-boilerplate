import { combineReducers } from 'redux';
import { Auth } from './auth'
import { sceneReducer } from './scene-reducer'

const appReducer = combineReducers({
  Auth,
  sceneReducer
});

export {appReducer}
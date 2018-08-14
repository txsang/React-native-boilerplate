import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';

const sceneReducer = (state = {}, {type, scene}) => {
  switch(type){
    case ActionConst.FOCUS:
      return { ...state, scene };
    default:
      return state;
  }
}

const appReducer = combineReducers({
  sceneReducer
});

export {appReducer}
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import { appReducer } from './reducers';
import Scenes from './routes';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('reducer: ACTION:', action);
    return defaultReducer(state, action);
  };
};

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}



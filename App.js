import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';

import { appReducer } from './src/reducers';
import Scenes from './src/routes';

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer, compose(applyMiddleware(thunk)));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}



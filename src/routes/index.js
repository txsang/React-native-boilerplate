import React, { Component } from 'react';
import { Actions, Scene, Stack } from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import routes from './routes'

const Scenes = Actions.create(
  <Stack
    key='root'
    transitionConfig={() => ({
      screenInterpolator: (props) => {
        return CardStackStyleInterpolator.forInitial
      }
    })}>
    {
      routes.map(item => {
        return (
            <Scene key={item.path} title={item.title} navBar={item.navBar} component={item.component} hideNavBar={item.hideNavBar || false} />
          )
      })
    }
  </Stack>
);

export default Scenes
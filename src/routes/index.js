import React, { Component } from 'react';

import { Actions, Scene, Stack } from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import {FirstPage} from '../components/page/FirstPage';
import {NavBar} from '../components/layout/master';

const Scenes = Actions.create(
  <Stack
    key='root'
    transitionConfig={() => ({
      screenInterpolator: (props) => {
        const { scene } = props
        switch (scene.route.routeName) {
          case 'scene1':
            return CardStackStyleInterpolator.forVertical(props)
          case 'scene2':
            return CardStackStyleInterpolator.forHorizontal(props)
          case 'scene3':
            return CardStackStyleInterpolator.forFade(props)
          default:
            return CardStackStyleInterpolator.forInitial
        }
      }
    })}>
    <Scene key="scene1" title="1" navBar={NavBar} component={FirstPage}/>
    <Scene key="scene2" title="2" navBar={NavBar} component={FirstPage}/>
    <Scene key="scene3" title="3" navBar={NavBar} component={FirstPage}/>
    <Scene key="scene4" title="4" navBar={NavBar} component={FirstPage}/>
  </Stack>
);

export default Scenes
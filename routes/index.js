import React, { Component } from 'react';

import { Actions, Scene, Stack } from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import CustomNavBarView from '../components/CustomNavBarView';
import CustomNavBar from '../components/CustomNavBar';

const Scenes = Actions.create(
    <Stack
      key='root'
      transitionConfig={() => ({
        screenInterpolator: (props) => {
          const { scene } = props
          switch (scene.route.routeName) {
            case '1':
              return CardStackStyleInterpolator.forVertical(props)
            case '2':
              return CardStackStyleInterpolator.forHorizontal(props)
            case '3':
              return CardStackStyleInterpolator.forFade(props)
            default:
              return CardStackStyleInterpolator.forInitial
          }
        }
      })}>
      <Scene key="action1" title="1" navBar={CustomNavBar} component={CustomNavBarView}/>
      <Scene key="action2" title="2" navBar={CustomNavBar} component={CustomNavBarView}/>
      <Scene key="action3" title="3" navBar={CustomNavBar} component={CustomNavBarView}/>
      <Scene key="action4" title="4" navBar={CustomNavBar} component={CustomNavBarView}/>
    </Stack>
);

export default Scenes
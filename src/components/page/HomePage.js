import React, { Component } from 'react';
import {View} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export class HomePage extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => { Actions.home(); }}>Switch to Scene 1</Button>
        <Button onPress={() => { Actions.about_us({id: 12345}); }}>Switch to Scene 1</Button>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {View} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export class FirstPage extends Component {
  render() {
    return (
      <View>
        <Button onPress={Actions.pop}>Back</Button>
        <Button onPress={() => { Actions.scene1(); }}>Switch to Scene 1</Button>
        <Button onPress={() => { Actions.scene2(); }}>Switch to Scene 2</Button>
        <Button onPress={() => { Actions.scene3(); }}>Switch to Scene 3</Button>
        <Button onPress={() => { Actions.scene4(); }}>Switch to Scene 4</Button>
      </View>
    );
  }
}

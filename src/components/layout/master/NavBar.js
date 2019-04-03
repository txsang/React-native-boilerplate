import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Actions } from 'react-native-router-flux';
import {Global} from '../../../assets/styles';

export default class NavBar extends React.Component {

  _renderLeft() {
    return (
      <TouchableOpacity onPress={Actions.pop} style={Global.navBarLeft}>
        <Text>left header</Text>
      </TouchableOpacity>
    );
  }

  _renderMiddle() {
    return (
      <View style={Global.navbarTitle}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }

  _renderRight() {
    return (
      <View style={Global.navBarRight}>
        <Text>right header</Text>
      </View>
    );
  }

  render() {
    let dinamicStyle = {};
    if (Actions.currentScene === 'scene1') {
      dinamicStyle = { backgroundColor: 'red' };
    } else {
      dinamicStyle = { backgroundColor: 'yellow' };
    }

    return (
      <View style={[Global.container, dinamicStyle]}>
        {this._renderLeft()}
        {this._renderMiddle()}
        {this._renderRight()}
      </View>
    );
  }
}

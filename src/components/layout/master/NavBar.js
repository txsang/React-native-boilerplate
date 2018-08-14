import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Actions } from 'react-native-router-flux';
import {Global} from '../../../assets/style';

export default class NavBar extends React.Component {

  _renderLeft() {
    return (
      <TouchableOpacity onPress={Actions.pop} style={[Global.navBarItem, { paddingLeft: 10 }]}>
        <Text>left header</Text>
      </TouchableOpacity>
    );
  }

  _renderMiddle() {
    return (
      <View style={Global.navBarItem}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }

  _renderRight() {
    return (
      <View style={[Global.navBarItem, { flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10 }]}>
        <Text>right header</Text>
      </View>
    );
  }

  render() {
    console.log(Global)
    let dinamicStyle = {};
    if (Actions.currentScene === 'action1') {
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

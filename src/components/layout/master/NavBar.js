import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Actions } from 'react-native-router-flux'
import {Global} from '../../../assets/styles'

export default class NavBar extends React.Component {

  _renderLeft() {
    return (
      <TouchableOpacity onPress={Actions.pop} style={Global.navBarLeft}>
        <Text style={Global.navbarText}>left header</Text>
      </TouchableOpacity>
    );
  }

  _renderMiddle() {
    return (
      <View style={Global.navbarTitle}>
        <Text style={Global.navbarText}>{this.props.title}</Text>
      </View>
    );
  }

  _renderRight() {
    return (
      <TouchableOpacity style={Global.navBarRight} onPress={() => {Actions.menu()}}>
        <Text style={Global.navbarText}>right header</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={[Global.container, { backgroundColor: '#b10707' }]}>
        {this._renderLeft()}
        {this._renderMiddle()}
        {this._renderRight()}
      </View>
    );
  }
}

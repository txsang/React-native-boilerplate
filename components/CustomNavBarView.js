import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, ViewPropTypes,
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

class TabView extends React.Component {
  render() {
    return (
      <View>
        <Button onPress={Actions.pop}>Back</Button>
        <Button onPress={() => { Actions.action1(); }}>Switch to Scene with CustomNavBar #1</Button>
        <Button onPress={() => { Actions.action2(); }}>Switch to Scene with CustomNavBar #2</Button>
        <Button onPress={() => { Actions.action3(); }}>Switch to Scene with different CustomNavBar </Button>
        <Button onPress={() => { Actions.action4(); }}>Switch to Scene with a navBar hidden</Button>
      </View>
    );
  }
}
TabView.propTypes = propTypes;

export default TabView;

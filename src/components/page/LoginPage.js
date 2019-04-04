import React, { Component } from 'react';
import {View, TextInput, Image, Text, StatusBar, ScrollView} from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import { Actions } from 'react-native-router-flux'
import {Global, Input, ButtonStyles, SignIn} from '../../assets/styles'
import * as actions from '../../actions/auth'
import {connect} from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidUpdate() {
    if (!this.props.isAuth) {
      Actions.about_us()
    }
  }

  handleLogin() {
    this.props.dispatch(actions.login(this.state))
  }

  render() {
    return (
      <KeyboardAwareScrollView style={[SignIn.contentFull, SignIn.wrapper]}>
        <View style={[Global.contentFull, SignIn.wrapper]}>
          <StatusBar barStyle="light-content" />
          <Image style={SignIn.logo} source={require('../../assets/images/logo.png')} />
          <TextInput value={this.state.username} onChangeText={(username) => {this.setState({username})}} type='text' placeholder='Username' style={Input.inputDefault}/>
          <TextInput value={this.state.password} onChangeText={(password) => {this.setState({password})}} secureTextEntry={true} type='text' placeholder='Password' style={[Input.inputDefault, {marginBottom: 10}]}/>
          <Text style={[ButtonStyles.buttonText, {marginBottom: 10}]}>{this.props.message}</Text>
          <SpinnerButton
            isLoading={this.props.loading}
            buttonStyle={ButtonStyles.buttonDefault}
            spinnerType='SkypeIndicator'
            onPress={this.handleLogin.bind(this)}
          ><Text style={ButtonStyles.buttonText}>SignIn</Text></SpinnerButton>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    message : state.Auth && state.Auth.message ? state.Auth.message : '',
    loading : state.Auth && state.Auth.loading ? true : false,
    isAuth : state.Auth && state.Auth.isAuth ? true : false
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
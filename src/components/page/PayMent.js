import React from 'react';
import { Actions } from 'react-native-router-flux'
import {connect} from 'react-redux'
import QRCode from 'react-native-qrcode';
import {
    View,
    TextInput,
    Text
} from 'react-native';
import {Global, HomeStyle} from '../../assets/styles'

class PayMent extends React.Component {
  state = {
    text: Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2),
  }

  render() {
    console.log(this.props.currentUser)
    return (
      <View style={Global.contentFull}>
        <Text>Sử dụng mã QR này để thanh toán</Text>
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='black'
          fgColor='white'/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser : state.Auth && state.Auth.currentUser ? state.Auth.currentUser : '',
    isAuth : state.Auth && state.Auth.isAuth ? true : false
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(PayMent)

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
import Accordion from 'react-native-collapsible/Accordion'

class UserMenu extends React.Component {
  state = {
    menu: [
      {
        title: 'First',
        content: 'Lorem ipsum...',
      },
      {
        title: 'Second',
        content: 'Lorem ipsum...',
      },
    ],
    activeSections: []
  }

  _renderSectionTitle = menu => {
    return (
      <View style={Global.content}>
        <Text>{menu.content}</Text>
      </View>
    );
  };

  _renderHeader = menu => {
    return (
      <View style={Global.header}>
        <Text style={Global.headerText}>{menu.title}</Text>
      </View>
    );
  };

  _renderContent = menu => {
    return (
      <View style={Global.content}>
        <Text>{menu.content}</Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    console.log(this.props.currentUser)
    return (
      <View style={Global.contentFull}>
        <Accordion
          sections={this.state.menu}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)

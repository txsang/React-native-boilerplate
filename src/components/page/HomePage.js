import React, { Component } from 'react';
import {View, ScrollView, Text, Dimensions} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux'
import Image from 'react-native-scalable-image'
import {Global, HomeStyle} from '../../assets/styles'

class HomePage extends Component {
  _renderNews() {
    return this.props.news.map((item, index) => {
      return (
        <View key={item.id}>
          <Image
            width= {Dimensions.get('window').width}
            source={{uri: item.image}}
          />
          <View style={HomeStyle.newsWrapContent}>
            <Text style={HomeStyle.newsTitle}>{item.title}</Text>
            <Text style={HomeStyle.newsDesc}>{item.description}</Text>
          </View>
        </View>
      )
    })
  }
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Text style={HomeStyle.heading}>OUR MISSION STATEMENT</Text>
            <Text style={HomeStyle.desc}>"To enrich and embrace the human experience through our commitment to serve the very best coffee, tea, and goodness in every cup, in every community. "</Text>
          </View>
          <View>
            {this._renderNews()}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    news: state.NewsStore && state.NewsStore.news ? state.NewsStore.news : '',
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
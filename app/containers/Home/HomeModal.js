import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'

export default class HomeModal extends Component {

  render () {
    return (
      <View
          style={ { height: '100%',
            justifyContent: 'space-around' } }>
        <TouchableOpacity onPress={ this.props.dismiss }>
          <Text
            style={ { color: 'black',
              textAlign: 'center',
              fontSize: 16 } }>Click here to close!</Text>
        </TouchableOpacity>
        <Text
            style={ { color: 'black',
              textAlign: 'center',
              fontSize: 14 } }>You can also click the background overlay to close.</Text>
      </View>
    )
  }
}
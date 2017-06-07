import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'

import HomeModal from './HomeModal'
import { styles } from '../../styles'

class Home extends Component {

  openModal = () => {
    this.context.store.dispatch({
      type: 'SHOW_MODAL',
      payload: (
        <HomeModal />
      ),
    })
  }

  render () {
    return (
      <View style={ [ styles.paddedContainer, { justifyContent: 'space-around' } ] }>
        <View>
          <Text
            style={ { textAlign: 'center',
              fontSize: 24 } }>Home</Text>
        </View>

        <View style={ { alignSelf: 'center' } }>
          <TouchableOpacity
            onPress={ this.openModal }

            >
            <Text>Open modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Home.contextTypes = {
  store: PropTypes.object,
}

export default Home
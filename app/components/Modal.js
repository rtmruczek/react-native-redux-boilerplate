import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing, TouchableWithoutFeedback } from 'react-native'

import HomeModal from './HomeModal'

const MODAL_MAPPING = {
  HomeModal,
}
export const modalTypes = {
  HomeModal: 'HomeModal',
}

class Modal extends Component {

  static propTypes = {
    modalType: PropTypes.string,
    dismiss: PropTypes.func, // this is automatically injected by the modal renderer if no method is provided
  }
  constructor (props) {
    super(props)
    this.state = {
      scrollAnim: new Animated.Value(-700),
    }
  }

  componentDidMount () {
    Animated.timing(
      this.state.scrollAnim,
      {
        easing: Easing.out(Easing.poly(4)),
        toValue: -150,
      }
    ).start()
  }

  dismiss = () => {
    Animated.timing(
      this.state.scrollAnim,
      {
        easing: Easing.out(Easing.poly(4)),
        toValue: 350,
      }
    ).start(() => this.props.dismiss())
  }

  render () {

    const { modalType, dismiss } = this.props
    const SpecificModal = MODAL_MAPPING[modalType]

    return (
       <TouchableWithoutFeedback
          onPress={ () => {} }
            >
            <Animated.View
              style={ {
                alignSelf: 'center',
                backgroundColor: 'white',
                borderColor: '#ccc',
                height: '50%',
                width: '80%',
                bottom: this.state.scrollAnim,
                padding: 20,
                borderRadius: 7,
                borderWidth: 1,
                justifyContent: 'space-around' } }>
                <SpecificModal dismiss={ dismiss } />
              </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
}

export default Modal

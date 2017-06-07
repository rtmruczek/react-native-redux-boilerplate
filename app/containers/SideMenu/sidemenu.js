import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Platform, StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { Actions, DefaultRenderer } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Drawer from 'react-native-drawer'
import Modal from '../../components/Modal'
import { styles } from '../../styles'

class SideMenuComponent extends Component {

  static propTypes = {
    dismissModal: PropTypes.func,
    modal: PropTypes.object,
    navigationState: PropTypes.object, // automatically injected into props by react-native-router-flux
    onNavigate: PropTypes.func, // automatically injected into props by react-native-router-flux
  }

  render () {
    const state = this.props.navigationState
    const children = state.children

    const renderer = <DefaultRenderer navigationState={ children[0] } onNavigate={ this.props.onNavigate } />

    const modalToDisplay = this.props.modal
    // you can use this structure to display modals over top of the entire app. (including the navbar.)
    const modal = modalToDisplay ? (<TouchableWithoutFeedback
              onPress={ this.props.dismissModal }>
              <View
                style={ styles.transparentOverlay }>
                <Modal
                 dismiss={ modalToDisplay.props.dismiss || this.props.dismissModal }
                 >
                 {modalToDisplay}
                 </Modal>
                </View>
              </TouchableWithoutFeedback>) : null

    const displaceDrawer = (<Drawer
          ref={ ref => this._drawer = ref }
          type="displace"
          open={ state.open }
          onOpen={ () => Actions.refresh({ key: state.key,
            open: true }) }
          onClose={ () => Actions.refresh({ key: state.key,
            open: false }) }
          content={
              <View
                style={ {
                  alignItems: 'center' } }
                >
                <Text>A sidemenu.</Text>
              </View>
            }
          tapToClose
          styles={ drawerStyles }
          openDrawerOffset={ 0.2 }
          panOpenMask={ 0.2 }
          panCloseMask={ 0.2 }
          acceptPan={ false }
          tweenDuration={ 250 }
          tweenEasing={ 'easeInOutQuad' }
          >
            { renderer }
            { modal }
        </Drawer>)

    // return overlayDrawer for android-style overlay sidemenu
    // instead of ios-style displace sidemenu
    return displaceDrawer
  }
}

const mapStateToProps = state => ({
  modal: state.app.modal,
})

const mapDispatchToProps = dispatch => ({
  dismissModal: () => dispatch({
    type: 'SHOW_MODAL',
    payload: null,
  }),
})

const drawerStyles = {
  drawer: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 0 : 20,
    shadowColor: '#000000',
    opacity: 0.95,
    shadowOpacity: Platform.OS === 'android' ? 0.5 : 0.25,
    shadowOffset: {
      width: 4,
      height: 1,
    },
    borderRightColor: '#bebebe',
    borderRightWidth: StyleSheet.hairlineWidth,
    shadowRadius: 5,
    paddingLeft: 3,
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent)
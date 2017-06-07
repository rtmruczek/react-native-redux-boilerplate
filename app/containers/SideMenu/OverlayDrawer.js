import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Drawer from 'react-native-drawer'
import { Actions, DefaultRenderer } from 'react-native-router-flux'

class OverlayDrawer extends Component {

  static propTypes = {
    key: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    renderer: PropTypes.object.isRequired,
    drawerStyles: PropTypes.object,
    modal: PropTypes.object,
  }

  render () {
    return (
       <Drawer
            type="overlay"
            ref={ ref => this._drawer = ref }
            open={ this.props.open }
          onOpen={ () => Actions.refresh({ key: this.props.key,
            open: true }) }
          onClose={ () => Actions.refresh({ key: this.props.key,
            open: false }) }
            content={ <View /> }
            tapToClose
            openDrawerOffset={ 0.2 } // 20% gap on the right side of drawer
            panCloseMask={ 0.2 }
            closedDrawerOffset={ -3 }
            styles={ this.props.drawerStyles }
            tweenDuration={ 250 }
            tweenEasing={ 'easeInOutQuad' }
            tweenHandler={ ratio => ({
              main: { opacity: (2 - ratio) / 1.4 },
            }) }
            >
            { this.props.renderer }
            { this.props.modal }
      </Drawer>
    )
  }
}

export default OverlayDrawer
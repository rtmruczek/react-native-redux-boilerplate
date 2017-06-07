import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { StatusBar, Platform } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// containers
import SideMenu from './containers/SideMenu'
import Home from './containers/Home'

// components
import NavMenuButton from './components/NavMenuButton'

// helpers
import reducers from './reducers'
// import { styles } from './styles'

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

const ConnectedRouter = connect()(Router)

const middleware = [
  thunkMiddleware,
  loggerMiddleware,
]
const appStore = compose(
  applyMiddleware(...middleware),
)(createStore)(reducers)

export default class ReactNativeRouterReduxBoilerplate extends Component {

  static propTypes = {
    store: PropTypes.object,
  }

  render () {

    StatusBar.setBarStyle('dark-content', true)

    const store = this.props.store || appStore

    // USED TO CLEAR REDUX PERSIST
    // persistStore(store, { storage: AsyncStorage }, () => {
    //   console.log('cleared')
    // }).purge()
    return (
      <Provider store={ store }>
        <ConnectedRouter>
          <Scene
            key="drawer"
            component={ SideMenu }
            open={ false }
          >
            <Scene
              key="root"
            >
              <Scene
                renderLeftButton={ NavMenuButton }
                backTitle="Login"
                key="home"
                component={ Home }
                title="Home"
              />
            </Scene>
          </Scene>
        </ConnectedRouter>
      </Provider>
    )
  }
}
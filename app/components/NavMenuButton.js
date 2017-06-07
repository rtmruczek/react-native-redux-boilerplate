import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { styles } from '../styles'

export default function NavMenuButton () {

  return (
        <TouchableOpacity
        style={ styles.menuButtonContainer }
        onPress={ () => Actions.refresh({ key: 'drawer',
          open: true }) }>
          <Text>Menu</Text>
      </TouchableOpacity>
  )
}

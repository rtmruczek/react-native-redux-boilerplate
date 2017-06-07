import { StyleSheet, Platform } from 'react-native'

export const headerHeight = Platform.OS === 'ios' ? 64 : 20
export const statusBarHeight = Platform.OS === 'ios' ? 20 : 0

export const styles = StyleSheet.create({
  paddedContainer: {
    paddingTop: headerHeight,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  transparentOverlay: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
})



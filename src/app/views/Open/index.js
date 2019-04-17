import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Open from './build'
import Home from '../Home'

export default createAppContainer(
  createSwitchNavigator({ Open: { screen: Open }, Home: { screen: Home } })
)

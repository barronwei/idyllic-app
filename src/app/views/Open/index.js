import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Open from './build'
import Home from '../Home'
import Apply from '../Apply'
import Login from '../Login'

export default createAppContainer(
  createSwitchNavigator({
    Open: { screen: Open },
    Home: { screen: Home },
    Apply: { screen: Apply },
    Login: { screen: Login }
  })
)

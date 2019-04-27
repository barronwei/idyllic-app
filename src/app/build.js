import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Open from './views/Open'
import Home from './views/Home'
import Apply from './views/Apply'
import Login from './views/Login'

export default createAppContainer(
  createSwitchNavigator({
    Open: { screen: Open },
    Home: { screen: Home },
    Apply: { screen: Apply },
    Login: { screen: Login }
  })
)

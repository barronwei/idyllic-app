import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Open from './views/Open'

export default createAppContainer(
  createSwitchNavigator({
    Open: { screen: Open }
  })
)

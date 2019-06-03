import { createBottomTabNavigator } from 'react-navigation'
import Group from './Group'
import Focus from './Focus'
import Cause from './Cause'
import { ic } from '../../services/visual'

export default createBottomTabNavigator(
  {
    Settings: {
      screen: Group,
      navigationOptions: {
        tabBarIcon: ic('contact', 25)
      }
    },
    Schedule: {
      screen: Focus,
      navigationOptions: {
        tabBarIcon: ic('list', 25)
      }
    },
    Addition: {
      screen: Cause,
      navigationOptions: {
        tabBarIcon: ic('add-circle-outline', 25)
      }
    }
  },
  {
    initialRouteName: 'Schedule',
    backBehavior: 'none',
    lazy: true,
    tabBarOptions: {
      showLabel: false
    }
  }
)

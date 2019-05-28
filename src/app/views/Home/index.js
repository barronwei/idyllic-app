import { createBottomTabNavigator } from 'react-navigation'
import Group from './Group'
import Focus from './Focus'
import Cause from './Cause'
import { Iconize } from '../../services/visual'

export default createBottomTabNavigator(
  {
    Settings: {
      screen: Group,
      navigationOptions: {
        tabBarIcon: Iconize('contact', 25)
      }
    },
    Schedule: {
      screen: Focus,
      navigationOptions: {
        tabBarIcon: Iconize('list', 25)
      }
    },
    Addition: {
      screen: Cause,
      navigationOptions: {
        tabBarIcon: Iconize('add-circle-outline', 25)
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

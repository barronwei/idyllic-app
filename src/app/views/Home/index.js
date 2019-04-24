import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Home from './build'
import { Iconize } from '../../services/visual'

export default createAppContainer(
  createBottomTabNavigator(
    {
      Profile: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: Iconize('person', 25)
        }
      },
      Discover: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: Iconize('compass', 25)
        }
      },
      Groups: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: Iconize('chatbubbles', 25)
        }
      }
    },
    {
      initialRouteName: 'Discover',
      backBehavior: 'none',
      tabBarOptions: {
        showLabel: false,
        activeTintColor: 'red',
        inactiveTintColor: 'black'
      }
    }
  )
)

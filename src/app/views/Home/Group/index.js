import { createMaterialTopTabNavigator } from 'react-navigation'
import Safe from './build'
import Per from './Per'
import Set from './Set'

export default createMaterialTopTabNavigator(
  {
    Personal: {
      screen: Per
    },
    Settings: {
      screen: Set
    }
  },
  {
    initialRouteName: 'Personal',
    backBehavior: 'none',
    lazy: true,
    tabBarComponent: Safe,
    tabBarOptions: {
      showLabel: true,
      indicatorStyle: { backgroundColor: 'black' },
      labelStyle: { fontSize: 15, color: 'black' },
      style: {
        backgroundColor: 'white'
      }
    }
  }
)

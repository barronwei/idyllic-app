import React from 'react'
import { SafeAreaView } from 'react-native'
import { MaterialTopTabBar } from 'react-navigation'

export default function Safe(props) {
  return (
    <SafeAreaView>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  )
}

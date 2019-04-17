import React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Iconize(l, s) {
  return <Icon name={Platform.OS === 'ios' ? 'ios-' + l : 'md-' + l} size={s} />
}

import React from 'react'
import { Dimensions, PixelRatio, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export function hp(p) {
  const dh = Dimensions.get('window').height
  const eh = typeof p === 'number' ? p : parseFloat(p)
  return PixelRatio.roundToNearestPixel((dh * eh) / 100)
}

export function wp(p) {
  const dw = Dimensions.get('window').width
  const ew = typeof p === 'number' ? p : parseFloat(p)
  return PixelRatio.roundToNearestPixel((dw * ew) / 100)
}

export function ic(l, s) {
  return <Icon name={Platform.OS === 'ios' ? 'ios-' + l : 'md-' + l} size={s} />
}

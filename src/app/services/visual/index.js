import React from 'react'
import { Dimensions, PixelRatio, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

let w = Dimensions.get('window').width
let h = Dimensions.get('window').height

export function wp(p) {
  const ew = typeof p === 'number' ? p : parseFloat(p)
  return PixelRatio.roundToNearestPixel((w * ew) / 100)
}

export function hp(p) {
  const eh = typeof p === 'number' ? p : parseFloat(p)
  return PixelRatio.roundToNearestPixel((h * eh) / 100)
}

export function lo(i) {
  Dimensions.addEventListener('change', d => {
    w = d.window.width
    h = d.window.height
    i.setState({
      orientation: w < h ? 'portrait' : 'landscape'
    })
  })
}

export function rol() {
  Dimensions.removeEventListener('change', () => {})
}

export function Iconize(l, s) {
  return <Icon name={Platform.OS === 'ios' ? 'ios-' + l : 'md-' + l} size={s} />
}

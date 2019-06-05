import React, { Fragment } from 'react'
import { Switch } from 'react-native'
import Timing from 'react-native-modal-datetime-picker'
import Slider from 'react-native-slider'
import moment from 'moment'
import { wp, hp } from '../visual'
import { Words } from '../../styles'

export function Facts(props) {
  const { title, ...more } = props
  return (
    <Fragment>
      <Words>{title}</Words>
      <Switch
        {...more}
        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
        trackColor={{ false: 'black', true: 'black' }}
      />
    </Fragment>
  )
}

export function Dater(props) {
  const { value, title, click, ...more } = props
  return (
    <Fragment>
      <Words>{title}</Words>
      <Words onPress={click}>
        {moment(value.date).format('MMMM Do YYYY, h:mm a')}
      </Words>
      <Timing {...more} isVisible={value.show} mode="datetime" />
    </Fragment>
  )
}

export function Slide(props) {
  const { value } = props
  return (
    <Fragment>
      <Words>{value}</Words>
      <Slider
        {...props}
        style={{ height: hp(5), width: wp(60) }}
        thumbStyle={{ height: hp(1.5), width: hp(1.5) }}
        minimumTrackTintColor="black"
        maximumTrackTintColor="gray"
      />
    </Fragment>
  )
}

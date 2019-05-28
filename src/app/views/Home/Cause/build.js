import React, { Component } from 'react'
import { Alert } from 'react-native'
import Slider from 'react-native-slider'
import { Input, Words } from '../../../styles'
import { wp, hp } from '../../../services/visual'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      time: '',
      prior: 3,
      power: 50
    }
  }
  submit = async (task, time, power) => {
    try {
      Alert.alert(power)
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  render() {
    const { task, time, prior, power } = this.state
    return (
      <React.Fragment>
        <Input
          placeholder="task"
          textAlign="center"
          onChangeText={task => this.setState({ task })}
          value={task}
        />
        <Input
          placeholder="time"
          textAlign="center"
          keyboardType="numeric"
          onChangeText={time => this.setState({ time })}
          value={time}
        />
        <Words>Priority</Words>
        <Words>{prior}</Words>
        <Slider
          style={{ width: wp(60), height: hp(5) }}
          minimumValue={1}
          maximumValue={5}
          step={1}
          minimumTrackTintColor="black"
          maximumTrackTintColor="gray"
          thumbStyle={{ width: hp(1.5), height: hp(1.5) }}
          onValueChange={prior => this.setState({ prior })}
          value={prior}
        />
        <Words>Energy</Words>
        <Words>{power}</Words>
        <Slider
          style={{ width: wp(60), height: hp(5) }}
          minimumValue={10}
          maximumValue={90}
          step={5}
          minimumTrackTintColor="black"
          maximumTrackTintColor="gray"
          thumbStyle={{ width: hp(1.5), height: hp(1.5) }}
          onValueChange={power => this.setState({ power })}
          value={power}
        />
        <Words onPress={() => this.submit(task, time, prior, power)}>
          Submit
        </Words>
      </React.Fragment>
    )
  }
}

import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Input, Words } from '../../../styles'
import { Slide } from '../../../services/build'

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
  submit = async (task, time, prior, power) => {
    try {
      Alert.alert(prior + power)
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
        <Slide
          minimumValue={1}
          maximumValue={5}
          step={1}
          onValueChange={prior => this.setState({ prior })}
          value={prior}
        />
        <Words>Energy</Words>
        <Slide
          minimumValue={10}
          maximumValue={90}
          step={5}
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

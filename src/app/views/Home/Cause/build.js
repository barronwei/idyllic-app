import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Input, Words } from '../../../styles'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      time: ''
    }
  }
  submit = async (task, time) => {
    try {
      Alert.alert(task)
      Alert.alert(time)
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  render() {
    const { task, time } = this.state
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
        <Words onPress={() => this.submit(task, time)}>Submit</Words>
      </React.Fragment>
    )
  }
}

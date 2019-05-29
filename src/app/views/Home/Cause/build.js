import React, { Component, Fragment } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import moment from 'moment'
import { Words, Input } from '../../../styles'
import { Facts, Dater, Slide } from '../../../services/build'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      time: '',
      start: {
        name: 'start',
        show: false,
        date: moment()
      },
      end: {
        name: 'end',
        show: false,
        date: moment().add(1, 'minute')
      },
      prior: 3,
      power: 50,
      parts: false
    }
  }
  timing = (t, d) => {
    this.setState({
      [t.name]: {
        ...t,
        show: !t.show,
        date: moment(d)
      }
    })
  }
  submit = async s => {
    try {
      Alert.alert(s.prior + s.power)
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  render() {
    const { task, time, start, end, prior, power, parts } = this.state
    return (
      <Fragment>
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
        <Dater
          value={start}
          title="Start"
          click={() => this.timing(start, start.date)}
          onConfirm={d => this.timing(start, d)}
          onCancel={() => this.timing(start, start.date)}
        />
        <Dater
          value={end}
          title="End"
          click={() => this.timing(end, end.date)}
          onConfirm={d => this.timing(end, d)}
          onCancel={() => this.timing(end, end.date)}
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
        <Facts
          title="Divide"
          onValueChange={parts => this.setState({ parts })}
          value={parts}
        />
        <Words onPress={() => this.submit(this.state)}>Submit</Words>
      </Fragment>
    )
  }
}

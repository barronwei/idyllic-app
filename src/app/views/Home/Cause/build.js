import React, { Component, Fragment } from 'react'
import { Alert } from 'react-native'
import moment from 'moment'
import { Input, Words } from '../../../styles'
import { Dater, Slide } from '../../../services/build'

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
  viewer = t => {
    this.setState({ [t.name]: { ...t, show: !t.show } })
  }
  select = (t, d) => {
    this.setState({
      [t.name]: {
        ...t,
        show: !t.show,
        date: moment(d)
      }
    })
  }
  submit = async (task, time, prior, power) => {
    try {
      Alert.alert(prior + power)
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  render() {
    const { task, time, start, end, prior, power } = this.state
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
          click={() => this.viewer(start)}
          onConfirm={d => this.select(start, d)}
          onCancel={() => this.viewer(start)}
        />
        <Dater
          value={end}
          title="End"
          click={() => this.viewer(end)}
          onConfirm={d => this.select(end, d)}
          onCancel={() => this.viewer(end)}
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
      </Fragment>
    )
  }
}

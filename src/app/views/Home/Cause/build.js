import React, { Fragment, useState } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import moment from 'moment'
import uuid from 'uuid'
import { Words, Input } from '../../../styles'
import { Facts, Dater, Slide } from '../../../services/build'

export default function Form() {
  const [state, setState] = useState({
    task: '',
    time: '',
    start: {
      name: 'start',
      show: false,
      date: moment().format()
    },
    end: {
      name: 'end',
      show: false,
      date: moment()
        .add(1, 'minute')
        .format()
    },
    prior: 3,
    power: 50,
    parts: false
  })
  const timing = (t, d) => {
    setState({
      ...state,
      [t.name]: {
        ...t,
        show: !t.show,
        date: moment(d).format()
      }
    })
  }
  const submit = async event => {
    try {
      firebase
        .firestore()
        .collection(firebase.auth().currentUser.uid)
        .doc(uuid.v1())
        .set(event)
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  const { task, time, start, end, prior, power, parts } = state
  return (
    <Fragment>
      <Input
        placeholder="task"
        textAlign="center"
        onChangeText={task => setState({ ...state, task })}
        value={task}
      />
      <Input
        placeholder="time"
        textAlign="center"
        keyboardType="numeric"
        onChangeText={time => setState({ ...state, time })}
        value={time}
      />
      <Dater
        value={start}
        title="Start"
        click={() => timing(start, start.date)}
        onConfirm={d => timing(start, d)}
        onCancel={() => timing(start, start.date)}
      />
      <Dater
        value={end}
        title="End"
        click={() => timing(end, end.date)}
        onConfirm={d => timing(end, d)}
        onCancel={() => timing(end, end.date)}
      />
      <Words>Priority</Words>
      <Slide
        minimumValue={1}
        maximumValue={5}
        step={1}
        onValueChange={prior => setState({ ...state, prior })}
        value={prior}
      />
      <Words>Energy</Words>
      <Slide
        minimumValue={10}
        maximumValue={90}
        step={5}
        onValueChange={power => setState({ ...state, power })}
        value={power}
      />
      <Facts
        title="Divide"
        onValueChange={parts => setState({ ...state, parts })}
        value={parts}
      />
      <Words onPress={() => submit(state)}>Submit</Words>
    </Fragment>
  )
}

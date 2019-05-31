import React, { Fragment, useState } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import moment from 'moment'
import uuid from 'uuid'
import { Words, Input } from '../../../styles'
import { Facts, Dater, Slide } from '../../../services/build'
import { check } from '../../../services/logic'

export default function Form() {
  const base = {
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
    parts: false,
    shift: false
  }
  const [state, setState] = useState(base)
  const { task, time, start, end, prior, power, parts, shift } = state
  const timing = (t, d) => {
    setState(ps => ({
      ...ps,
      [t.name]: {
        ...t,
        show: !t.show,
        date: moment(d).format()
      }
    }))
  }
  const submit = async () => {
    try {
      firebase
        .firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .collection('tasks')
        .add({ ...state, start: start.date, end: end.date })
      setState(base)
      Alert.alert('That is one more task you have to complete!')
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  const verify = () => {
    const cs = [
      { c: task.length === 0, e: 'Please give your task a cool name!' }
    ]
    check(cs)
    submit()
  }
  return (
    <Fragment>
      <Input
        autoCorrect
        autoFocus
        placeholder="task"
        textAlign="center"
        onChangeText={task => setState(ps => ({ ...ps, task }))}
        value={task}
      />
      <Input
        placeholder="time"
        textAlign="center"
        keyboardType="numeric"
        onChangeText={time => setState(ps => ({ ...ps, time }))}
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
        onValueChange={prior => setState(ps => ({ ...ps, prior }))}
        value={prior}
      />
      <Words>Energy</Words>
      <Slide
        minimumValue={10}
        maximumValue={90}
        step={5}
        onValueChange={power => setState(ps => ({ ...ps, power }))}
        value={power}
      />
      <Facts
        title="Divide"
        onValueChange={parts => setState(ps => ({ ...ps, parts }))}
        value={parts}
      />
      <Facts
        title="Change"
        onValueChange={shift => setState(ps => ({ ...ps, shift }))}
        value={shift}
      />
      <Words onPress={verify}>Submit</Words>
    </Fragment>
  )
}

import React, { Fragment, useState } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import moment from 'moment'
import { Facts, Dater, Slide } from '../../../services/build'
import { check } from '../../../services/logic'
import { Popup } from '../../../services/popup'
import { Words, Input } from '../../../styles'

export default function Form() {
  const s = {
    task: '',
    time: '',
    start: {
      name: 'start',
      show: false,
      date: moment()
        .add(1, 'minute')
        .format()
    },
    end: {
      name: 'end',
      show: false,
      date: moment()
        .add(2, 'minute')
        .format()
    },
    prior: 3,
    power: 50,
    parts: false,
    shift: false
  }
  const m = { show: false, note: '' }
  const [state, setState] = useState(s)
  const [modal, setModal] = useState(m)
  const { task, time, start, end, prior, power, parts, shift } = state
  const { note, show } = modal
  const hiding = () => {
    setModal(m)
  }
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
    const x = moment(start.date)
    const y = moment(end.date)
    const z = moment()
    const n = check([
      { c: task, e: 'Please give your task a cool name!' },
      { c: time, e: 'The task will need time to finish!' },
      { c: time > 0, e: 'Time travel is impossible now!' },
      { c: x.diff(z) > 0, e: 'We cannot travel back in time now!' },
      { c: y.diff(z) > 0, e: 'Next update will have time travel!' },
      { c: y.diff(x) > time, e: 'Not enough time by those dates!' }
    ])
    if (n) {
      setModal(pm => ({ ...pm, note: n }))
    } else {
      try {
        await firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .collection('tasks')
          .add({ ...state, start: start.date, end: end.date })
        setModal(pm => ({ ...pm, note: 'Added your new task!' }))
        setState(s)
      } catch (e) {
        setModal(pm => ({ ...pm, note: e.message }))
      }
    }
    setModal(pm => ({ ...pm, show: true }))
  }
  return (
    <Fragment>
      <Input
        autoCorrect
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
      <Words onPress={submit}>Submit</Words>
      <Popup note={note} exit={hiding} isVisible={show} />
    </Fragment>
  )
}

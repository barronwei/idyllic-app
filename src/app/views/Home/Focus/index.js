import React, { useState } from 'react'
import firebase from 'react-native-firebase'
import moment from 'moment'
import { Popup } from '../../../services/popup'
import Main from './build'
import { Lists, Title } from '../../../styles'

export default function Focus() {
  const m = { note: '', show: false, move: false, task: null }
  const [modal, setModal] = useState(m)
  const { note, show, move, task } = modal
  const prompt = (move, task) => {
    setModal({
      note: move ? 'Delete' : 'Finish' + ' this task?',
      show: true,
      move,
      task
    })
  }
  const answer = async (move, task) => {
    const { id, ...more } = task
    if (move) {
      try {
        await firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .collection('tasks')
          .doc(id)
          .delete()
        setModal({ note: 'Deleted', show: true, move: false, task: null })
      } catch (e) {
        setModal({ note: e.message, show: true, move: false, task: null })
      }
    } else {
      try {
        await firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .collection('ended')
          .doc(id)
          .set({ ...more, done: moment().format() })
        await firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .collection('tasks')
          .doc(id)
          .delete()
        setModal({ note: 'Crowned', show: true, move: false, task: null })
      } catch (e) {
        setModal({ note: e.message, show: true, move: false, task: null })
      }
    }
  }
  return (
    <Lists>
      <Title>Idyllic</Title>
      <Main prompt={prompt} />
      <Popup
        note={note}
        take={task ? () => answer(move, task) : null}
        exit={() => setModal(m)}
        isVisible={show}
      />
    </Lists>
  )
}

import React, { Fragment, useState } from 'react'
import firebase from 'react-native-firebase'
import { navigate } from '../../services/navigation'
import { Input, Words } from '../../styles'

export default function Form(props) {
  const { setModal } = props
  const [state, setState] = useState({ mail: '', pass: '' })
  const { mail, pass } = state
  const submit = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(mail, pass)
    } catch (e) {
      setModal({ note: e.message, show: true })
    }
  }
  const backer = () => {
    navigate('Open')
  }
  return (
    <Fragment>
      <Input
        placeholder="email"
        textAlign="center"
        textContentType="emailAddress"
        keyboardType="email-address"
        onChangeText={mail => setState(ps => ({ ...ps, mail }))}
        value={mail}
      />
      <Input
        placeholder="password"
        textAlign="center"
        textContentType="password"
        secureTextEntry
        onChangeText={pass => setState(ps => ({ ...ps, pass }))}
        value={pass}
      />
      <Words onPress={() => submit(mail, pass)}>Submit</Words>
      <Words onPress={backer}>Return</Words>
    </Fragment>
  )
}

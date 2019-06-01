import React, { Fragment, useState } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { Input, Words } from '../../styles'
import { navigate } from '../../services/navigation'

export default function Form() {
  const [state, setState] = useState({ mail: '', pass: '' })
  const { mail, pass } = state
  const submit = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(mail, pass)
    } catch (e) {
      Alert.alert(e.message)
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

import React from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { Lists, Title, Words } from '../../../styles'
import Main from './build'

export default function Focus() {
  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  return (
    <Lists>
      <Title>Welcome to Idyllic</Title>
      <Words onPress={logout}>Sign Out</Words>
      <Main />
    </Lists>
  )
}

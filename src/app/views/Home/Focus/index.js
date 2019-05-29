import React from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { Holds, Title, Words } from '../../../styles'

export default function Focus() {
  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  return (
    <Holds>
      <Title>Welcome to Idyllic</Title>
      <Words onPress={logout}>Sign Out</Words>
    </Holds>
  )
}

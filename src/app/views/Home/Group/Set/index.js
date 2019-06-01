import React from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { Holds, Title, Words } from '../../../../styles'

export default function Set() {
  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (e) {
      Alert.alert(e.message)
    }
  }
  return (
    <Holds>
      <Title>Settings</Title>
      <Words onPress={logout}>Sign Out</Words>
    </Holds>
  )
}

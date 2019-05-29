import React, { Component } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { Holds, Title, Words } from '../../../styles'

export default class Focus extends Component {
  logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  render() {
    return (
      <Holds>
        <Title>Welcome to Idyllic</Title>
        <Words onPress={this.logout}>Sign Out</Words>
      </Holds>
    )
  }
}

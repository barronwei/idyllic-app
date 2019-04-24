import React, { Component } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { Holds, Title, Words } from '../../styles'
import { navigate } from '../../services/navigation'

export default class Home extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Alert.alert('hi')
      } else {
        navigate('Open')
      }
    })
  }
  render() {
    return (
      <Holds>
        <Title>Welcome to Idyllic</Title>
        <Words>Now Started</Words>
      </Holds>
    )
  }
}

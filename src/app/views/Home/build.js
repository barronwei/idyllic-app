import React, { Component } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { navigate } from '../../services/navigation'
import { Container, Title, Words } from './styles'

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
      <Container>
        <Title>Welcome to Idyllic</Title>
        <Words>Now Started</Words>
      </Container>
    )
  }
}

import React, { Component } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { Input, Words } from './styles'
import { navigate } from '../../services/navigation'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pass: ''
    }
  }
  submit = async (user, pass) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(user, pass)
      navigate('Home')
    } catch (error) {
      Alert.alert('Please try again!')
    }
  }
  render() {
    let state = this.state
    return (
      <React.Fragment>
        <Input
          textContentType="username"
          onChangeText={user => this.setState({ user })}
          value={state.user}
        />
        <Input
          textContentType="password"
          onChangeText={pass => this.setState({ pass })}
          value={state.pass}
        />
        <Words onPress={() => this.submit(state.user, state.pass)}>
          Sign Up
        </Words>
      </React.Fragment>
    )
  }
}

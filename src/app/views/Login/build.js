import React, { Component } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { Input, Words } from '../../styles'
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
      await firebase.auth().signInWithEmailAndPassword(user, pass)
      navigate('Home')
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  return = () => {
    navigate('Open')
  }
  render() {
    const { user, pass } = this.state
    return (
      <React.Fragment>
        <Input
          textContentType="username"
          placeholder="username"
          onChangeText={user => this.setState({ user })}
          value={user}
        />
        <Input
          textContentType="password"
          placeholder="password"
          onChangeText={pass => this.setState({ pass })}
          value={pass}
          secureTextEntry
        />
        <Words onPress={() => this.submit(user, pass)}>Submit</Words>
        <Words onPress={this.return}>Return</Words>
      </React.Fragment>
    )
  }
}

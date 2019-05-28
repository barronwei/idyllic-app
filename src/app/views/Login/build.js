import React, { Component } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { Input, Words } from '../../styles'
import { navigate } from '../../services/navigation'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mail: '',
      pass: ''
    }
  }
  submit = async (mail, pass) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(mail, pass)
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  return = () => {
    navigate('Open')
  }
  render() {
    const { mail, pass } = this.state
    return (
      <React.Fragment>
        <Input
          placeholder="email"
          textAlign="center"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={mail => this.setState({ mail })}
          value={mail}
        />
        <Input
          placeholder="password"
          textAlign="center"
          textContentType="password"
          secureTextEntry
          onChangeText={pass => this.setState({ pass })}
          value={pass}
        />
        <Words onPress={() => this.submit(mail, pass)}>Submit</Words>
        <Words onPress={this.return}>Return</Words>
      </React.Fragment>
    )
  }
}

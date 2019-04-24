import React, { Component } from 'react'
import { Holds, Title, Words } from '../../styles'
import { navigate } from '../../services/navigation'

export default class Open extends Component {
  signup = () => {
    navigate('Apply')
  }
  signin = () => {
    navigate('Login')
  }
  render() {
    return (
      <Holds>
        <Title>Welcome to Idyllic</Title>
        <Words onPress={this.signup}>Sign Up</Words>
        <Words onPress={this.signin}>Sign In</Words>
      </Holds>
    )
  }
}

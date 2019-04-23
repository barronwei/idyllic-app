import React, { Component } from 'react'
import { navigate } from '../../services/navigation'
import { Container, Title, Words } from '../../styles'

export default class Open extends Component {
  signup = () => {
    navigate('Apply')
  }
  signin = () => {
    navigate('Login')
  }
  render() {
    return (
      <Container>
        <Title>Welcome to Idyllic</Title>
        <Words onPress={this.signup}>Sign Up</Words>
        <Words onPress={this.signin}>Sign In</Words>
      </Container>
    )
  }
}

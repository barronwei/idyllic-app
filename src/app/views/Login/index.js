import React, { Component } from 'react'
import { navigate } from '../../services/navigation'
import { Container, Title, Words } from './styles'

export default class Login extends Component {
  tackle = () => {
    navigate('Home')
  }
  render() {
    return (
      <Container>
        <Title>Sign In</Title>
        <Words onPress={this.tackle}>Sign In</Words>
      </Container>
    )
  }
}

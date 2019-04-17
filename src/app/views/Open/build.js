import React, { Component } from 'react'
import { navigate } from '../../services/navigation'
import { Container, Title, Words } from './styles'

export default class Open extends Component {
  tackle = () => {
    navigate('Home')
  }
  render() {
    return (
      <Container>
        <Title>Welcome to Idyllic</Title>
        <Words onPress={this.tackle}>Get Started</Words>
      </Container>
    )
  }
}

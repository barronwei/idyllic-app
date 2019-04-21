import React, { Component } from 'react'
import { navigate } from '../../services/navigation'
import { Container, Title, Words } from './styles'

export default class Apply extends Component {
  tackle = () => {
    navigate('Home')
  }
  render() {
    return (
      <Container>
        <Title>Sign Up</Title>
        <Words onPress={this.tackle}>Sign Up</Words>
      </Container>
    )
  }
}

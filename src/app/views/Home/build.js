import React, { Component } from 'react'
import { Container, Title, Words } from './styles'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Title>Welcome to Idyllic</Title>
        <Words>Now Started</Words>
      </Container>
    )
  }
}

import React, { Component } from 'react'
import { navigate } from '../../services/navigation'
import { Container, Title } from '../../styles'
import Form from './build'

export default class Apply extends Component {
  tackle = () => {
    navigate('Home')
  }
  render() {
    return (
      <Container>
        <Title>Sign Up</Title>
        <Form />
      </Container>
    )
  }
}

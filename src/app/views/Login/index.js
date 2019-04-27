import React, { Component } from 'react'
import { Holds, Title } from '../../styles'
import Form from './build'

export default class Login extends Component {
  render() {
    return (
      <Holds>
        <Title>Sign In</Title>
        <Form />
      </Holds>
    )
  }
}

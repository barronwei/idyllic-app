import React, { Component } from 'react'
import { Holds, Title } from '../../styles'
import Form from './build'

export default class Apply extends Component {
  render() {
    return (
      <Holds>
        <Title>Sign Up</Title>
        <Form />
      </Holds>
    )
  }
}

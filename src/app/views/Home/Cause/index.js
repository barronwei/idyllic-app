import React, { Component } from 'react'
import { Holds, Title } from '../../../styles'
import Form from './build'

export default class Add extends Component {
  render() {
    return (
      <Holds>
        <Title>Add Task</Title>
        <Form />
      </Holds>
    )
  }
}

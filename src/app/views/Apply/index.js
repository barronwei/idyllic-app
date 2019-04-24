import React, { Component } from 'react'
import { navigate } from '../../services/navigation'
import { Holds, Title } from '../../styles'
import Form from './build'

export default class Apply extends Component {
  tackle = () => {
    navigate('Home')
  }
  render() {
    return (
      <Holds>
        <Title>Sign Up</Title>
        <Form />
      </Holds>
    )
  }
}

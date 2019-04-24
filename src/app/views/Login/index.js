import React, { Component } from 'react'
import { navigate } from '../../services/navigation'
import { Holds, Title } from '../../styles'
import Form from './build'

export default class Login extends Component {
  tackle = () => {
    navigate('Home')
  }
  render() {
    return (
      <Holds>
        <Title>Sign In</Title>
        <Form />
      </Holds>
    )
  }
}

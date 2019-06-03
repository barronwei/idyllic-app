import React from 'react'
import { navigate } from '../../services/navigation'
import { Holds, Title, Words } from '../../styles'

export default function Open() {
  const signup = () => {
    navigate('Apply')
  }
  const signin = () => {
    navigate('Login')
  }
  return (
    <Holds>
      <Title>Welcome to Idyllic</Title>
      <Words onPress={signup}>Sign Up</Words>
      <Words onPress={signin}>Sign In</Words>
    </Holds>
  )
}

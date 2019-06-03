import React, { useState } from 'react'
import { Popup } from '../../services/popup'
import Form from './build'
import { Holds, Title } from '../../styles'

export default function Login() {
  const m = { note: '', show: false }
  const [modal, setModal] = useState(m)
  const { note, show } = modal
  return (
    <Holds>
      <Title>Sign In</Title>
      <Form setModal={setModal} />
      <Popup note={note} exit={() => setModal(m)} isVisible={show} />
    </Holds>
  )
}

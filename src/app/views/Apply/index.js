import React, { useState } from 'react'
import { Holds, Title } from '../../styles'
import { Popup } from '../../services/popup'
import Form from './build'

export default function Apply() {
  const m = { note: '', show: false }
  const [modal, setModal] = useState(m)
  const { note, show } = modal
  return (
    <Holds>
      <Title>Sign Up</Title>
      <Form setModal={setModal} />
      <Popup note={note} exit={() => setModal(m)} isVisible={show} />
    </Holds>
  )
}

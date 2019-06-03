import React, { useState } from 'react'
import { Popup } from '../../../services/popup'
import Form from './build'
import { Holds, Title } from '../../../styles'

export default function Add() {
  const m = { note: '', show: false }
  const [modal, setModal] = useState(m)
  const { note, show } = modal
  return (
    <Holds>
      <Title>Add Task</Title>
      <Form setModal={setModal} />
      <Popup note={note} exit={() => setModal(m)} isVisible={show} />
    </Holds>
  )
}

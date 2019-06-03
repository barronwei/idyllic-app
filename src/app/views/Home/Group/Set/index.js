import React, { useState } from 'react'
import firebase from 'react-native-firebase'
import { Popup } from '../../../../services/popup'
import { Holds, Title, Words } from '../../../../styles'

export default function Set() {
  const m = { note: '', show: false }
  const [modal, setModal] = useState(m)
  const { note, show } = modal
  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (e) {
      setModal({ note: e.message, show: true })
    }
  }
  return (
    <Holds>
      <Title>Settings</Title>
      <Words onPress={logout}>Sign Out</Words>
      <Popup note={note} exit={() => setModal(m)} isVisible={show} />
    </Holds>
  )
}

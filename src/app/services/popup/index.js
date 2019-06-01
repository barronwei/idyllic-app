import React from 'react'
import Modal from 'react-native-modal'
import { Notes, Words } from '../../styles'

export function Popup(props) {
  const { note, exit, ...more } = props
  return (
    <Modal {...more} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Notes>
        <Words>{note}</Words>
        <Words onPress={exit}>Exit</Words>
      </Notes>
    </Modal>
  )
}

export function main() {
  return []
}

import React, { Fragment } from 'react'
import Modal from 'react-native-modal'
import { Notes, Words } from '../../styles'

export function Popup(props) {
  const { note, take, exit, ...more } = props
  return (
    <Modal {...more} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Notes>
        <Words>{note}</Words>
        {take ? (
          <Fragment>
            <Words onPress={take}>Yeah</Words>
            <Words onPress={exit}>Nope</Words>
          </Fragment>
        ) : (
          <Words onPress={exit}>Exit</Words>
        )}
      </Notes>
    </Modal>
  )
}

export function Quite() {
  return []
}

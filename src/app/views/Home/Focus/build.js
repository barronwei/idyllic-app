import React, { Component, Fragment } from 'react'
import { SectionList } from 'react-native'
import firebase from 'react-native-firebase'
import { Event, Words } from '../../../styles'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    this.ref = firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .collection('tasks')
    this.sub = this.ref.onSnapshot(this.update)
  }
  componentWillUnmount() {
    this.sub()
  }
  update = tasks => {
    const events = []
    tasks.forEach(task => {
      events.push({ ...task.data(), id: task.id })
    })
    this.setState({
      events
    })
  }
  render() {
    const { events } = this.state
    if (events.length === 0) {
      return <Words>Good riddance you have time on your hands!</Words>
    } else {
      return (
        <SectionList
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Fragment key={item.id}>
              <Event>
                <Words>{item.task}</Words>
              </Event>
            </Fragment>
          )}
          sections={[{ title: 'Placeholder', data: events }]}
        />
      )
    }
  }
}

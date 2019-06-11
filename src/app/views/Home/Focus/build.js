import React, { Component, Fragment } from 'react'
import { Animated, SectionList } from 'react-native'
import firebase from 'react-native-firebase'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { colors } from '../../../config'
import { wp } from '../../../services/visual'
import { Event, Panel, Words } from '../../../styles'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    this.sub = firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .collection('tasks')
      .onSnapshot(ts => {
        const events = []
        ts.forEach(t => {
          events.push({ ...t.data(), id: t.id })
        })
        this.setState({
          events
        })
      })
  }
  componentWillUnmount() {
    this.sub()
  }

  swiper = (i, d) => {
    const { affirm, negate } = colors
    const inputRange = [-100, 0, 100]
    const translateX = d.interpolate({
      inputRange,
      outputRange: inputRange.map(x => x + i * wp(34))
    })
    return (
      <Panel
        as={Animated.View}
        style={{
          backgroundColor: i > 0 ? negate : affirm,
          transform: [{ translateX }]
        }}
      >
        <Words>{i > 0 ? 'Delete' : 'Finish'}</Words>
      </Panel>
    )
  }

  render() {
    const { prompt } = this.props
    const { events } = this.state
    return events.length ? (
      <Fragment>
        <SectionList
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Swipeable
              key={item.id}
              onSwipeableLeftOpen={() => prompt(false, item)}
              onSwipeableRightOpen={() => prompt(true, item)}
              renderLeftActions={(p, d) => this.swiper(-1, d)}
              renderRightActions={(p, d) => this.swiper(1, d)}
            >
              <Event>
                <Words>{item.task}</Words>
              </Event>
            </Swipeable>
          )}
          sections={[{ title: 'Placeholder', data: events }]}
        />
      </Fragment>
    ) : (
      <Fragment>
        <Words>Congratulations!</Words>
        <Words>Good riddance you have time on your hands!</Words>
      </Fragment>
    )
  }
}

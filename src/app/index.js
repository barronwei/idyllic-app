import React, { Component } from 'react'
import firebase from 'react-native-firebase'
import { navigate, set } from './services/navigation'
import Initial from './build'

export default class App extends Component {
  componentDidMount() {
    this.pers = firebase.firestore().settings({ persistence: true })
    this.auth = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigate('Home')
      } else {
        navigate('Open')
      }
    })
  }
  componentWillUnmount() {
    this.pers()
    this.auth()
  }
  tackle = ref => {
    set(ref)
  }
  render() {
    return <Initial ref={this.tackle} />
  }
}

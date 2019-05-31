import React, { Component } from 'react'
import firebase from 'react-native-firebase'
import { navigate, set } from './services/navigation'
import Initial from './build'

export default class App extends Component {
  componentDidMount() {
    this.auth = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigate('Home')
      } else {
        navigate('Open')
      }
    })
  }
  componentWillUnmount() {
    this.auth()
  }
  tackle = r => {
    set(r)
  }
  render() {
    return <Initial ref={this.tackle} />
  }
}

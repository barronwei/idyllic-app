import React, { Component } from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { navigate, set } from './services/navigation'
import Initial from './build'

export default class App extends Component {
  componentDidMount() {
    this.auth = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.data = firebase
          .firestore()
          .collection('users')
          .doc(user.uid)
          .onSnapshot(
            () => {
              Alert.alert('Change')
            },
            error => Alert.alert(error.message)
          )
        navigate('Home')
      } else {
        navigate('Open')
      }
    })
    this.pers = firebase.firestore().enablePersistence
  }
  componentWillUnmount() {
    this.auth()
    this.pers()
    this.data()
  }
  tackle = ref => {
    set(ref)
  }
  render() {
    return <Initial ref={this.tackle} />
  }
}

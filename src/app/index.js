import React, { Component } from 'react'
import { set } from './services/navigation'
import Initial from './build'

export default class App extends Component {
  tackle = ref => {
    set(ref)
  }
  render() {
    return <Initial ref={this.tackle} />
  }
}

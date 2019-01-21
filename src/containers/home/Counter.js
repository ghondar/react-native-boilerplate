import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Text, Button } from 'react-native-paper'
import { withRouter } from 'react-router-native'

import homeDucks from 'reducers/home'

class Counter extends Component {
  render() {
    const {
      home: { counter },
      addCounter,
      removeCounter
    } = this.props

    return (
      <View>
        <Text>Home</Text>
        <Text>{counter}</Text>
        <Button onPress={() => addCounter()}>Add</Button>
        <Button onPress={() => removeCounter()}>Remove</Button>
        <Button onPress={() => this.props.history.push('/home/detail')}>Detalle</Button>
      </View>
    )
  }
}

export default connect(
  ({ home }) => ({ home }),
  { addCounter: homeDucks.creators.addCounter, removeCounter: homeDucks.creators.removeCounter }
)(withRouter(Counter))

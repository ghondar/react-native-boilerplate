import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import homeDucks from 'reducers/home'

class Home extends Component {
  render() {
    const {
      home: { counter },
      addCounter,
      removeCounter
    } = this.props

    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text>Home</Text>
        <Text>{counter}</Text>
        <Button color='#841584' onPress={() => addCounter()} title='Add' />
        <Button color='#841584' onPress={() => removeCounter()} title='Remove' />
        <Button color='#841584' onPress={() => this.props.history.push('/dashboard')} title='Dashboard' />
      </View>
    )
  }
}

export default connect(
  ({ home }) => ({ home }),
  { addCounter: homeDucks.creators.addCounter, removeCounter: homeDucks.creators.removeCounter }
)(Home)

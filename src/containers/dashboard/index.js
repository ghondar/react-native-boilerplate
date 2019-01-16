import React, { Component } from 'react'
import { View, Button } from 'react-native'

class Dashboard extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Button color='#841584' onPress={() => this.props.history.goBack()} title='Regresar' />
      </View>
    )
  }
}

export default Dashboard

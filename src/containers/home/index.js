import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, BottomNavigation, Text } from 'react-native-paper'
import { connect } from 'react-redux'

import homeDucks from 'reducers/home'

const MusicRoute = () => <Text>Music</Text>

const AlbumsRoute = () => <Text>Albums</Text>

const RecentsRoute = () => <Text>Recents</Text>

class Home extends Component {
  state = {
    index : 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' }
    ]
  }

  _handleIndexChange = index => this.setState({ index })

  _renderScene = BottomNavigation.SceneMap({
    music  : MusicRoute,
    albums : AlbumsRoute,
    recents: RecentsRoute
  })

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
        <Button onPress={() => addCounter()}>Add</Button>
        <Button onPress={() => removeCounter()}>Remove</Button>
        <Button onPress={() => this.props.history.push('/home/detail')}>Detalle</Button>
        <BottomNavigation navigationState={this.state} onIndexChange={this._handleIndexChange} renderScene={this._renderScene} />
      </View>
    )
  }
}

export default connect(
  ({ home }) => ({ home }),
  { addCounter: homeDucks.creators.addCounter, removeCounter: homeDucks.creators.removeCounter }
)(Home)

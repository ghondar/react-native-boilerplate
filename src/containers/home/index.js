import React, { Component } from 'react'
import { View } from 'react-native'
import { BottomNavigation, Text } from 'react-native-paper'

import Counter from './Counter'

const AlbumsRoute = () => <Text>Albums</Text>

const RecentsRoute = () => <Text>Recents</Text>

class Home extends Component {
  state = {
    index : 0,
    routes: [
      { key: 'counter', title: 'Counter', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' }
    ]
  }

  _handleIndexChange = index => this.setState({ index })

  _renderScene = BottomNavigation.SceneMap({
    counter: Counter,
    albums : AlbumsRoute,
    recents: RecentsRoute
  })

  render() {
    return (
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <BottomNavigation navigationState={this.state} onIndexChange={this._handleIndexChange} renderScene={this._renderScene} />
      </View>
    )
  }
}

export default Home

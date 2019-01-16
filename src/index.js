import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'

import Routes from 'routes'
import store from 'store/configureStore'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </Provider>
    )
  }
}

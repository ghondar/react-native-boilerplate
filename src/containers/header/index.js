import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-native'
import { Appbar } from 'react-native-paper'
import Drawer from 'react-native-drawer-menu'

import Menu from './Menu'

class Header extends Component {
  constructor(props) {
    super(props)
    this.drawer = React.createRef()
  }

  state = {
    selectedItem: 'About'
  }

  _handleToggle = () => {
    this.drawer.current.openDrawer()
  }

  render() {
    const {
      history: {
        location: { pathname },
        goBack
      },
      routes
    } = this.props
    const { title, subTitle, more, search } = routes[pathname]

    const menu = <Menu onItemSelected={this._handleMenuItemSelected} />

    return (
      <Drawer
        customStyles={{ drawer: { elevation: 5 } }} drawerContent={menu} moveCapture
        ref={this.drawer} type={Drawer.types.Overlay}>
        <StatusBar backgroundColor={'rgba(52, 52, 52, 0.6)'} translucent={true} />
        <Appbar.Header style={{ marginTop: 24 }}>
          {more ? <Appbar.Action icon='menu' onPress={this._handleToggle} /> : <Appbar.BackAction onPress={() => goBack()} />}
          <Appbar.Content subtitle={subTitle} title={title} />
          {search && <Appbar.Action icon='search' />}
        </Appbar.Header>
        {this.props.children}
      </Drawer>
    )
  }

  _handleMenuItemSelected = item => {
    this.drawer.current.closeDrawer()
    this.setState({
      selectedItem: item
    })
  }
}

export default connect(({ routes }) => ({ routes }))(withRouter(Header))

import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, StyleSheet, ScrollView, View, Image, Text } from 'react-native'

const window = Dimensions.get('window')
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png'

const styles = StyleSheet.create({
  menu: {
    flex           : 1,
    height         : window.height,
    backgroundColor: 'white',
    zIndex         : 1000,
    padding        : 20
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop   : 20
  },
  avatar: {
    width       : 48,
    height      : 48,
    borderRadius: 24,
    flex        : 1
  },
  name: {
    position: 'absolute',
    left    : 70,
    top     : 20
  },
  item: {
    fontSize  : 14,
    fontWeight: '300',
    paddingTop: 5
  }
})

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri }} style={styles.avatar} />
        <Text style={styles.name}>Your name</Text>
      </View>

      <Text onPress={() => onItemSelected('About')} style={styles.item}>
        Home
      </Text>

      <Text onPress={() => onItemSelected('Contacts')} style={styles.item}>
        Dashboard
      </Text>
    </ScrollView>
  )
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired
}

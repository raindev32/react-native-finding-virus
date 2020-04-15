import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'

import List from './List'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

class Home extends Component {
  render () {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Portal Virus</Text>
        <List navigation={navigation} />
      </View>
    )
  }
}
export default withNavigation(Home)

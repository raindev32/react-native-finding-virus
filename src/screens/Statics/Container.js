import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

class Container extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>ini halaman Statics</Text>
      </View>
    )
  }
}

export default Container

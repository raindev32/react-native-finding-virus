import React, { Component } from 'react'
import {
  View, StyleSheet, Image, TouchableOpacity
} from 'react-native'
import { Text, Card, CardItem } from 'native-base'

import CoronaVirus from 'assets/virus/corona/corona-virus.png'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  card: {
    borderRadius: 10
  },
  cardItem: {
    borderRadius: 10
  },
  flexLeft: {
    width: '20%'
  },
  flexRight: {
    width: '80%'
  },
  virusImg: {
    width: '100%',
    height: 50
  },
  virusName: {
    fontSize: 18,
    fontWeight: 'normal',
    paddingHorizontal: 10
  },
  virusAliases: {
    fontSize: 13,
    fontWeight: 'normal',
    paddingHorizontal: 10
  }
})

class List extends Component {
  render () {
    const { navigation } = this.props
    const data = [
      {
        name: 'Corona Virus',
        aliases: 'Covid 19 ( Corona Virus Deases 2019 )'
      }
    ]

    return (
      <View style={styles.container}>
        {
          data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('PortalDetail', { headTitle: item.name })}
            >
              <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <View style={styles.flexLeft}>
                    <Image source={CoronaVirus} style={styles.virusImg} />
                  </View>
                  <View style={styles.flexRight}>
                    <Text style={styles.virusName}>{item.name}</Text>
                    <Text note style={styles.virusAliases}>{item.aliases}</Text>
                  </View>
                </CardItem>
              </Card>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}
export default List

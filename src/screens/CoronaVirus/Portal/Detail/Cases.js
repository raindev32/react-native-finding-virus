import React, { Component } from 'react'
import {
  View, StyleSheet
} from 'react-native'
import {
  Text, Card, CardItem
} from 'native-base'
import { numberFormatter } from 'utils/string'
import { convertTimeStampToDate } from 'utils/time'

import color from 'theme/color'
import globalStyle from 'theme/style'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    borderRadius: 10
  },
  cardItem: {
    borderRadius: 10,
    flexDirection: 'column',
    borderWidth: 3
  },
  wrapperCard: {
    width: '100%',
    flexDirection: 'row'
  },
  flex: {
    width: '50%'
  },
  txtCount: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  txtName: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  txtLastupdate: {
    color: color.secondaryText,
    textAlign: 'center',
    fontSize: 13,
    paddingVertical: 10
  }
})

class Cases extends Component {
  render () {
    const { data } = this.props

    const dataTop = [
      {
        name: 'Terkonfirmasi',
        total: numberFormatter(data.confirmed),
        color: color.smoothText
      },
      {
        name: 'Dalam perawatan',
        total: numberFormatter(data.active),
        color: color.starColor
      }
    ]

    const dataBottom = [
      {
        name: 'Sembuh',
        total: numberFormatter(data.recovered),
        color: color.limeColor
      },
      {
        name: 'Meninggal',
        total: numberFormatter(data.deaths),
        color: color.errorColor
      }
    ]

    return (
      <View style={styles.container}>
        <Text style={[globalStyle.boldText, globalStyle.padVert]}>
          Kasus COVID-19 di Indonesia saat ini:
        </Text>
        <View style={styles.wrapperCard}>
          {
            dataTop.map((item, index) => (
              <View key={index} style={styles.flex}>
                <Card style={styles.card}>
                  <CardItem style={[styles.cardItem, { borderColor: item.color }]}>
                    <Text style={[styles.txtCount, { color: item.color }]}>{item.total}</Text>
                    <Text style={[styles.txtName, { color: item.color }]}>{item.name}</Text>
                  </CardItem>
                </Card>
              </View>
            ))
          }
        </View>

        <View style={styles.wrapperCard}>
          {
            dataBottom.map((item, index) => (
              <View key={index} style={styles.flex}>
                <Card style={styles.card}>
                  <CardItem style={[styles.cardItem, { borderColor: item.color }]}>
                    <Text style={[styles.txtCount, { color: item.color }]}>{item.total}</Text>
                    <Text style={[styles.txtName, { color: item.color }]}>{item.name}</Text>
                  </CardItem>
                </Card>
              </View>
            ))
          }
        </View>

        <Text style={styles.txtLastupdate}>
          {`Last updated ${convertTimeStampToDate(data.lastUpdate)}`}
        </Text>
      </View>
    )
  }
}
export default Cases

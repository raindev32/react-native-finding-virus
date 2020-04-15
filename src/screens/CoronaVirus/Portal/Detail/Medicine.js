import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text, Left, Right } from 'native-base'

import color from 'theme/color'
import globalStyle from 'theme/style'

import MedicineStaff from 'assets/virus/corona/medicine-staff.png'

const styles = StyleSheet.create({
  padVert: {
    paddingVertical: 30
  },
  medicineStaffImg: {
    width: '100%',
    height: 200
  },
  messageMed: {
    color: color.secondaryText,
    textAlign: 'center'
  }
})

class Medicine extends Component {
  render () {
    return (
      <View style={[globalStyle.fdRow, styles.padVert]}>
        <Left>
          <Image source={MedicineStaff} style={styles.medicineStaffImg} />
        </Left>
        <Right>
          <Text style={styles.messageMed}>
            Siap siaga Covid 19 dan tetap jaga kesehatan selama pandemi berlangsung.
          </Text>
        </Right>
      </View>
    )
  }
}
export default Medicine

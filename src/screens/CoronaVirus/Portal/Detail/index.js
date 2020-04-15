import React, { Component } from 'react'
import color from 'theme/color'

import GlobalCases from 'components/Global'
import Container from './Container'

class Detail extends Component {
  static navigationOptions = (navigation) => {
    let { params } = navigation.navigation.state
    let headerTitle = params && params.headTitle ? params.headTitle : null
    let headerTitleStyle = {
      fontSize: 20,
      color: color.textIcons,
      marginTop: 0,
      marginHorizontal: 0,
      textAlign: 'left',
      flex: 1,
      paddingVertical: 0,
      paddingHorizontal: 10
    }
    let headerRight = (<GlobalCases navigation={navigation.navigation} />)
    let headerTintColor = color.textIcons
    let headerStyle = {
      elevation: 0,
      shadowOpacity: 0,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: color.smoothText // color.primaryColor
    }
    let headerBackTitle = ''

    return ({
      hideShadow: true,
      headerStyle,
      headerTitle,
      headerTitleStyle,
      headerTintColor,
      headerBackTitle,
      headerRight,
      headerLayoutPreset: 'center'
    })
  }

  render () {
    return (
      <Container />
    )
  }
}
export default Detail

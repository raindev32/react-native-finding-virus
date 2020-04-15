import React, { PureComponent } from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Icon,
  View
} from 'native-base'
import color from 'theme/color'

const styles = StyleSheet.create({
  content: {
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 30
  },
  icon: {
    textAlign: 'center',
    justifyContent: 'center',
    color: color.textIcons,
    alignItems: 'center',
    fontSize: 30
  }
})

class MainBarItem extends PureComponent {
  render () {
    const { focused, tintColor } = this.props
    return (
      <View style={[
        styles.content,
        {
          backgroundColor: tintColor
        }
      ]}
      >
        <Icon
          focused={focused}
          name="md-calendar"
          type="Ionicons"
          style={[
            styles.icon,
            {
              backgroundColor: tintColor
            }
          ]}
        />
      </View>
    )
  }
}

export default MainBarItem

import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

import color from 'theme/color'

const History = ({
  style = { color: color.textIcons, paddingRight: 10 },
  navigation,
  iconName = 'earth',
  type = 'AntDesign'
}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('GlobalCase')}
    >
      <Icon style={style} name={iconName} type={type} />
    </TouchableOpacity>
  )

History.propTypes = {
  iconName: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default History

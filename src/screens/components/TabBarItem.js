import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'native-base'

const TabBarItem = ({
  tintColor,
  style = { color: tintColor },
  iconName,
  type
}) => <Icon style={style} name={iconName} type={type} />

TabBarItem.defaultPropTypes = {
  type: 'FontAwesome'
}

TabBarItem.propTypes = {
  tintColor: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default TabBarItem

import React from 'react'
import {
  StatusBar,
  View,
  StyleSheet,
  Platform
} from 'react-native'
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import color from 'theme/color'

import TabBarItem from 'screens/components/TabBarItem'
// import MainBarItem from 'screens/components/MainBarItem'

// Content
import Home from 'screens/Content/Home'

// Search
import Search from 'screens/Search'

// Statics
import Statics from 'screens/Statics'

// Login
import Login from 'screens/Login'

// Corona Virus Portal
import PortalDetail from 'screens/CoronaVirus/Portal/Detail'
import GlobalCases from 'screens/CoronaVirus/GlobalCases'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const BottomTabNavigatorConfig = {
  // tabBarComponent: null,
  initialRouteName: 'Home',
  backBehavior: 'history',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  mode: 'card',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: color.primaryColor,
    inactiveTintColor: color.inputTextColor,
    style: {
      backgroundColor: color.textIcons,
      height: 60
    },
    labelStyle: {
      marginTop: -4,
      fontSize: 12
    },
    indicatorStyle: {
      height: 0
    }
  },
  navigationOptions: {
    headerMode: 'float',
    headerTitleAllowFontScaling: false,
    headerTintColor: color.textIcons,
    headerLeft: null,
    headerStyle: {
      height: 0,
      paddingTop: 0,
      backgroundColor: color.textIcons
    }
  }
}

// Bagian ini membutuhkan Login First.
const MainAuth = createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({
      Home
    }),
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            focused={focused}
            tintColor={tintColor}
            iconName="home"
          />
        )
      })
    }
  },
  Search: {
    screen: createStackNavigator({
      Search
    }),
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Search',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            focused={focused}
            tintColor={tintColor}
            iconName="search1"
            type="AntDesign"
          />
        )
      })
    }
  },
  Statics: {
    screen: createStackNavigator({
      Statics
    }),
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Statics',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            focused={focused}
            tintColor={tintColor}
            iconType="Ionicons"
            iconName="md-stats"
          />
        )
      })
    }
  },
  Login: {
    screen: createStackNavigator({
      Login
    }),
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Login',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            focused={focused}
            tintColor={tintColor}
            iconName="user"
            type="AntDesign"
          />
        )
      })
    }
  }
}, BottomTabNavigatorConfig)

const MainStack = createStackNavigator(
  {
    Main: MainAuth,
    PortalDetail,
    GlobalCases,
    Search,
    Statics,
    Login
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerMode: 'float',
      headerTitleAllowFontScaling: false,
      headerTintColor: 'color.primaryColor',
      headerStyle: {
        height: 0,
        paddingTop: 0,
        color: color.primaryColor,
        backgroundColor: color.primaryColor
      }
    }
  }
)

// const LandingPage = createStackNavigator({
//   screen: LandingPageScreen
// })

const AppNavigator = createSwitchNavigator(
  {
    // LandingPage,
    // AuthLoading: AuthLoadingScreen,
    App: MainStack
  },
  {
    initialRouteName: 'App'
  }
)

const AppContainer = createAppContainer(AppNavigator)

class Routes extends React.Component {
  render () {
    return (
      <View
        style={styles.container}
      >
        <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor={color.primaryColor} />
        <AppContainer
          ref={(nav) => {
            this.navigator = nav
          }}
        />
      </View>
    )
  }
}

export default Routes

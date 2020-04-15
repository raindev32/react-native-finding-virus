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
// import ForgotPasswordScreen from 'screens/ForgotPassword'
// import HelpScreen from 'screens/Help'
// import HelpDetailScreen from 'screens/HelpDetail'

// Auth
// import Login from 'screens/auth/Login'
// import Register from 'screens/auth/Register'
// import ResetPassword from 'screens/auth/ResetPassword'
// import ChangePassword from 'screens/auth/ChangePassword'

// User
// import EditProfile from 'screens/User/EditProfile'
// import Setting from 'screens/User/Setting'
// import Address from 'screens/User/Address'
// import AddAddress from 'screens/User/AddAddress'
// import Profile from 'screens/User/Profile'
// import Notification from 'screens/User/Notification'
// import SettingNotification from 'screens/User/SettingNotification'

// Location
// import Location from 'screens/Location'
// import ChooseStore from 'screens/location/ChooseStore'

// Content
import Home from 'screens/Content/Home'
// import PromoDetail from 'screens/Content/PromoDetail'

// MEMBER
// import MainMember from 'screens/Member/MemberMain'
// import MemberAdd from 'screens/Member/MemberAdd'

// MEMBER DETAIL
// import MemberDetail from 'screens/MemberDetail'

// Organizer
// import OrganizerMain from 'screens/Organizer/OrganizerMain'
// import OrganizerCreate from 'screens/Organizer/OrganizerCreate'
// import OrganizerJoined from 'screens/Organizer/OrganizerJoined'
// import OrganizerEdit from 'screens/Organizer/OrganizerEdit'
// import OrganizerContact from 'screens/Organizer/Contact'
// import OrganizerProfile from 'screens/Organizer/public'

// Participant
// import ParticipantAsset from 'screens/Participant/Asset'

// Local Transaction
// import Search from 'screens/Search'
// import BundleDetail from 'screens/LocalTransaction/BundleDetail'
// import Event from 'screens/Event/EventMain'
// import EventCreate from 'screens/Event/EventCreate'
// import EventDetail from 'screens/Event/EventDetail'
// import EventReport from 'screens/Event/EventReport'
// import EventJoin from 'screens/Event/EventJoin'

// import EventCheckin from 'screens/Event/EventCheckin'
// import EventTicket from 'screens/Event/EventTicket'

// MONITORING
// import Asset from 'screens/Asset/AssetMain'
// import QrCodePage from 'screens/QrCodePage'
// import TicketJoined from 'screens/Ticket/TicketJoined'
// import TicketList from 'screens/Ticket/TicketList'
// import TicketCheckout from 'screens/Ticket/TicketCheckout'

// import Checkout from 'screens/Ticket/Checkout'

// import CartDetail from 'screens/LocalTransaction/CartDetail'
// import PhotoDetail from 'screens/LocalTransaction/PhotoDetail'
// import PhotoList from 'screens/LocalTransaction/PhotoList'
// import VerificationPage from './screens/VerificationPage'

// // Landing Page
// import LandingPageScreen from './screens/LandingPage'

// import BecomeCommittee from './screens/Committee/BecomeCommittee'

// import AuthLoadingScreen from './root/AuthLoadingScreen'

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

// Bagian ini sudah login.
const Main = createBottomTabNavigator({
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
      Home
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
  Event: {
    screen: createStackNavigator({
      Home
    }),
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Event',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            focused={focused}
            tintColor={tintColor}
            iconName="calendar"
          />
        )
      })
    }
  },
  Profile: {
    screen: createStackNavigator({
      Home
    }),
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Profile',
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
      Home
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
  Event: {
    screen: Home,
    navigationOptions: () => {
      return ({
        tabBarLabel: 'Event',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            focused={focused}
            tintColor={tintColor}
            iconName="calendar"
          />
        )
      })
    }
  },
  Login: {
    screen: Home,
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

const RequireAuth = createStackNavigator(
  {
    Main
    // AddAddress: {
    //   screen: AddAddress
    // },
    // Help: {
    //   screen: HelpScreen
    // },
    // HelpDetail: {
    //   screen: HelpDetailScreen
    // },
    // EditPhoto: {
    //   screen: EditPhotoScreen
    // },
    // VerificationPage,
    // ChangePassword,
    // Notification,
    // SettingNotification,
    // Profile,
    // Search,
    // Event,
    // TicketJoined,
    // TicketList,
    // TicketCheckout,
    // Checkout: {
    //   screen: Checkout,
    //   navigationOptions: {
    //     headerLeft: null,
    //     headerStyle: {
    //       height: 0,
    //       paddingTop: 0
    //     }
    //   }
    // },
    // EventCreate,
    // EventDetail: {
    //   screen: EventDetail,
    //   headerMode: 'none',
    //   navigationOptions: {
    //     headerVisible: false
    //   }
    // },
    // EventJoin,
    // QrCodePage,
    // EventCheckin: {
    //   screen: EventCheckin,
    //   navigationOptions: {
    //     headerLeft: null,
    //     headerStyle: {
    //       height: 0,
    //       paddingTop: 0
    //     }
    //   }
    // },
    // EditProfile,
    // EventReport,
    // Asset,
    // OrganizerContact,
    // OrganizerProfile,
    // OrganizerEdit,
    // // Setting,
    // OrganizerJoined,
    // OrganizerCreate,
    // OrganizerMain,
    // MainMember,
    // MemberAdd,
    // MemberDetail,
    // Location,
    // // ListOrganizer
    // BecomeCommittee,
    // EventTicket: {
    //   screen: EventTicket,
    //   navigationOptions: {
    //     headerLeft: null,
    //     headerStyle: {
    //       height: 0,
    //       paddingTop: 0
    //     }
    //   }
    // }
    // Checkout,
    // Address,
    // Bundle,
    // BundleDetail,
    // Cart,
    // CartDetail,
    // PhotoList,
    // PhotoDetail,
    // PromoDetail,
    // ChooseStore
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
        color: color.textIcons,
        backgroundColor: color.primaryColor
      }
    }
  }
)

const LoginStack = createStackNavigator(
  {
    Main: MainAuth
    // ForgotPassword: {
    //   screen: ForgotPasswordScreen
    // },
    // VerificationPage,
    // Register,
    // ResetPassword,
    // Notification,
    // SettingNotification,
    // EventDetail: {
    //   screen: EventDetail,
    //   headerMode: 'none',
    //   navigationOptions: {
    //     headerVisible: false
    //   }
    // },
    // EventReport,
    // OrganizerContact,
    // OrganizerProfile,
    // Location,
    // ParticipantAsset
    // PromoDetail,
    // ChooseStore: {
    //   screen: Login
    // }
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
    App: RequireAuth,
    Auth: LoginStack
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

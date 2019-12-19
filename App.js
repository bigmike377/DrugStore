import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome5';
//import {createStackNavigator} from 'react-navigation-stack';
//import {Platform} from 'react-native';
//import Main from './screens/Main';
//import HeaderApp from './screens/HeaderApp';

import HomeTab from './screens/tabs/HomeTab';
import MedicationsTab from './screens/tabs/MedicationsTab';
import OrderTab from './screens/tabs/OrderTab';
import MoreTab from './screens/tabs/MoreTab';
import OrderMed from './screens/tabs/OrderMed';

// const Navigator = createStackNavigator({
//   Main: {
//     screen: Main,
//     navigationOptions : {
//         headerLeft: <Icon
//           name={Platform.OS === 'ios' ? 'ios-basket' : 'capsules'}
//           style={{ paddingLeft: 10, color: '#5C6BC0', fontSize: 30 }} />,
//         headerRight: <Icon
//           name={Platform.OS === 'ios' ? 'ios-menu' : 'shopping-cart'}
//           style={{ paddingRight: 10, color: '#5C6BC0', fontSize: 25}} />,
//       }
//     }
// });

// class App extends Component {
//   render() {
//     return (
//       <MyDrawer />
//     );
//   }
// }

const MainNavigator = createBottomTabNavigator(
  {

    Home: {
      screen: HomeTab,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="ios-home" style={{ color: tintColor }} size={24} />;
        },
      },
    },
    Medications: {
      screen: MedicationsTab,
      navigationOptions: {
        tabBarLabel: 'Medications',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="ios-flask" style={{ color: tintColor }} size={24} />;
        },
      },
    },
    Order: {
      screen: OrderTab,
      navigationOptions: {
        tabBarLabel: 'Order',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="md-paper" style={{ color: tintColor }} size={24} />;
        },
      },
    },

    More: {
      screen: MoreTab,
      navigationOptions: {
        tabBarLabel: 'More',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="ios-more" style={{ color: tintColor }} size={24} />;
        },
      },
    },

  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#0288D1',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    },
    animationEnable: true,
    swipeEnable: true,
  },

);
export default createAppContainer(MainNavigator);






// const AppContainer = createAppContainer(Navigator);
// export default AppContainer;
//#5C6BC0


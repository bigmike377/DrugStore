// import React, {Component} from 'react';
// import {Container, Text, Content} from 'native-base';
// import {Icon} from 'native-base';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';

// import HomeTab from './tabs/HomeTab';
// import MedicationsTab from './tabs/MedicationsTab';
// import OrderTab from './tabs/OrderTab';
// import MoreTab from './tabs/MoreTab';
// import HeaderApp from './HeaderApp';

// export class Main extends Component {
//   render() {
//     return (
//         <HeaderApp />
//     );
//   }
// }

// const MainNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeTab,
//       navigationOptions: {
//         tabBarLabel: 'Home',
//         tabBarIcon: ({tintColor}) => {
//           return <Icon name="ios-home" style={{color: tintColor}} size={24} />;
//         },
//       },
//     },
//     Medications: {
//       screen: MedicationsTab,
//       navigationOptions: {
//         tabBarLabel: 'Medications',
//         tabBarIcon: ({tintColor}) => {
//           return <Icon name="ios-flask" style={{color: tintColor}} size={24} />;
//         },
//       },
//     },
//     Order: {
//       screen: OrderTab,
//       navigationOptions: {
//         tabBarLabel: 'Order',
//         tabBarIcon: ({tintColor}) => {
//           return <Icon name="md-paper" style={{color: tintColor}} size={24} />;
//         },
//       },
//     },
//     More: {
//       screen: MoreTab,
//       navigationOptions: {
//         tabBarLabel: 'More',
//         tabBarIcon: ({tintColor}) => {
//           return <Icon name="ios-more" style={{color: tintColor}} size={24} />;
//         },
//       },
//     },
//   },
//   {
//     animationEnable: true,
//     swipeEnable: true,
//     tabBarOptions: {
//       showLabel: true,
//       labelStyle: {
//         fontSize: 12,
//       },
//       activeTintColor: '#5C6BC0',
//       inactiveTintColor: 'grey',
//     },
//   },
// );

// export default createAppContainer(MainNavigator);


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


const RootStack = createStackNavigator({
  OrderMed: OrderMed,
});
export default createStackNavigator(RootStack);

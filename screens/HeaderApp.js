import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon,
  View,
  Drawer,
  SideBar,
} from 'native-base';
import {StyleSheet,TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeTab from './tabs/HomeTab';
import MedicationsTab from './tabs/MedicationsTab';
import OrderTab from './tabs/OrderTab';
import MoreTab from './tabs/MoreTab';
import SiderBar from './tabs/SiderBar';

export default class HeaderApp extends Component {
  closeDrawer() {
    this.drawer._root.close();
  }

  openDrawer() {
    this.drawer._root.open();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<SiderBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>
        <Container>
        <View style={{}}>
          <Header style={{backgroundColor: '#0288D1'}}>
            <Left>
            <TouchableOpacity onPress={() => this.openDrawer()}>
              <Icon name="ios-menu" style={{color: 'white' }}/>
            </TouchableOpacity>
              {/* <Button transparent onPress={() => this.openDrawer()}>
                <Icon name="ios-menu" />
              </Button> */}
            </Left>
            <Body></Body>
            <Right>
              <Button transparent>
                <Icon
                  name="ios-search"
                  style={{color: 'white', padding: 10}}
                  size={50}
                />
                <Icon name="ios-cart" style={{color: 'white'}} size={30} />
              </Button>
            </Right>
          </Header>
          </View>
        </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({});

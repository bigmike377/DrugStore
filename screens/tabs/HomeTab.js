import React, { Component } from 'react';
import {
  Container,
  Text,
  Content,
  Icon,
  View,
  Drawer,
  Title,
  Header,
  SideBar,
} from 'native-base';
import { createDrawerNavigator } from 'react-navigation-drawer';
import PostComponent from '../PostComponent';
import { StyleSheet, SafeAreaView } from 'react-native';
import PostData from '../../Data/PostData';
import HeaderApp from '../HeaderApp';

export default class HomeTab extends Component {
  // closeDrawer() {
  //   this.drawer._root.close();
  // }

  // openDrawer() {
  //   this.drawer._root.open();
  // }

  render() {
    return (
      // <Drawer
      //   ref={ref => {
      //     this.drawer = ref;
      //   }}
      //   content={<SideBar navigator={this.navigator} />}
      //   onClose={() => this.closeDrawer()}>
      <Container style={{ flex: 1 }}>

        {/* Header-Home */}
        <Header style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Title>
            Home
          </Title>
        </Header>
        <Content>
          {/* Body-Home */}

          <Content>
            {/* <PostComponent /> */}
            {PostData.map(eachImage => {
              return (
                <PostComponent
                  key={eachImage.key}
                  profileImage={eachImage.profileImage}
                  bodyImage={eachImage.bodyImage}
                  profile={eachImage.profile}
                  date={eachImage.date}
                />
              );
            })}
          </Content>
        </Content>
      </Container>

    );
  }
}

{/* const styles = StyleSheet.create({
          styleSeatch: {
          backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }); */}

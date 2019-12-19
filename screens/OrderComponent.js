import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Container,
  Icon,
  Text,
  Left,
  Right,
  Content,
  Thumbnail,
  Body,
  List,
  ListItem,
} from 'native-base';
import HeaderApp from '../HeaderApp';
import OrderData from '../Data/OrderData';
import SafeAreaView from 'react-native-safe-area-view';

export default class OrderTab extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          {/* Header-Home */}
          <View
            style={{
              height: 50,
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: '#dddddd',
            }}>
            <View>
              <HeaderApp />
            </View>
          </View>
          <Container>
            <Content>
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={{uri: 'https://www.w3schools.com/w3images/avatar2.png'}} />
                  </Left>
                  <Body>
                    <Text>Vũ Minh Thư</Text>
                    <Text note>
                      I am satisfied with the product!
                    </Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pmfnwof</Text>
                    <Text note>Đã nhận hàng</Text>
                    <Text note>Số lượng sản phẩm: 1</Text>
                    <Text note>22 September, 2019</Text>
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Container>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textOrder: {
    fontSize: 10,
  },
});

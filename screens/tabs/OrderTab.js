import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Container,
  Icon,
  Text,
  Left,
  Right,
  Title,
  Content,
  Thumbnail,
  Header,
  Fab,
  Body,
  List,
  ListItem,
} from 'native-base';
import HeaderApp from '../HeaderApp';
import SafeAreaView from 'react-native-safe-area-view';

export default class OrderTab extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>        
              <Header style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Title>
                  Order
                </Title>
              </Header>
          <Container>
            <Content>
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} />
                  </Left>
                  <Body>
                    <Text>Vũ Minh Thư</Text>
                    <Text note>
                      I am satisfied with the product!
                    </Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                    <Text note>Số lượng sản phẩm: 1</Text>
                    <Text note note style={{ color: 'blue' }}>Đã nhận hàng</Text>
                  </Right>
                </ListItem>
              </List>

              {/* user-2 */}
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={{ uri: 'https://www.w3schools.com/w3images/avatar6.png' }} />
                  </Left>
                  <Body>
                    <Text>Vũ Gia Khiêm</Text>
                    <Text note>
                      I am satisfied with the product!
                    </Text>
                  </Body>
                  <Right>
                    <Text note>5:30 pm</Text>
                    <Text note>Số lượng sản phẩm: 10</Text>
                    <Text note note style={{ color: 'blue' }}>Đã nhận hàng</Text>
                  </Right>
                </ListItem>
              </List>

              {/* user-3 */}
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
                  </Left>
                  <Body>
                    <Text>Vũ Đa Lin</Text>
                    <Text note>
                      I am satisfied with the product!
                    </Text>
                  </Body>
                  <Right>
                    <Text note>10:00 am</Text>
                    <Text note>Số lượng sản phẩm: 5</Text>
                    <Text note style={{ color: 'red' }}>Đang chờ</Text>
                  </Right>
                </ListItem>
              </List>

              {/* user-4 */}
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={{ uri: 'https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png' }} />
                  </Left>
                  <Body>
                    <Text>Vũ Thị Tuyết Nhi</Text>
                    <Text note>
                      I am satisfied with the product!
                    </Text>
                  </Body>
                  <Right>
                    <Text note>11:15 pm</Text>
                    <Text note>Số lượng sản phẩm: 2</Text>
                    <Text note style={{ color: 'red' }}>Chờ thanh toán</Text>
                  </Right>
                </ListItem>
              </List>

              {/* user-5 */}
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={{ uri: 'http://data.kenhsinhvien.net/files/2014/02/22/avatar-ep-kinh-1.jpg' }} />
                  </Left>
                  <Body>
                    <Text>Vũ Phương Linh</Text>
                    <Text note>
                      I am satisfied with the product!
                    </Text>
                  </Body>
                  <Right>
                    <Text note>6:00 pm</Text>
                    <Text note>Số lượng sản phẩm: 9</Text>
                    <Text note style={{ color: 'blue' }}>Đã nhận hàng</Text>
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
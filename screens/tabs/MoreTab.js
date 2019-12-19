import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  Fab,
  View,
  List,
  ListItem,
  Header,
  Left,
  Right,
  Body,
  Icon,
  Switch,
} from 'native-base';
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import HeaderApp from '../HeaderApp';

//import Icon from 'react-native-vector-icons/FontAwesome5'

export default class MoreTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (

      <Container style={{flex: 1}}>
        {/* Setting */}
        <View >
          <Header></Header>
        </View>
        <Content style={{flex: 9}}>
          <ListItem icon>
            <Left>
              <Icon
                name="ios-clipboard"
                style={{ color: 'grey' }}
                size={24}
              />
            </Left>
            <Body>
              <Text>Notes</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="md-browsers" style={{ color: 'grey' }} size={24} />
            </Left>
            <Body>
              <TouchableOpacity>
                <Text>Appointments</Text>
              </TouchableOpacity>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon
                name="ios-git-network"
                style={{ color: 'grey' }}
                size={24}
              />
            </Left>
            <Body>
              <Text>Doctors</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="ios-podium" style={{ color: 'grey' }} size={24} />
            </Left>
            <Body>
              <Text>Report</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="ios-settings" style={{ color: 'grey' }} size={24} />
            </Left>
            <Body>
              <Text>Settings</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="help-circle" style={{ color: 'grey' }} size={24} />
            </Left>
            <Body>
              <Text>Help & Support</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon
                name="ios-construct"
                style={{ color: 'grey' }}
                size={24}
              />
            </Left>
            <Body>
              <Text>Reminder Troubleshooting</Text>
            </Body>
          </ListItem>
        </Content>

        {/* Social */}
        <Container>
          <View style={{ flex: 1 }}>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: '#5067FF' }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}>
              <Icon name="share" />
              <Button style={{ backgroundColor: '#34A34F' }}>
                <Icon name="logo-whatsapp" />
              </Button>
              <Button style={{ backgroundColor: '#3B5998' }}>
                <Icon name="logo-facebook" />
              </Button>
              <Button disabled style={{ backgroundColor: '#DD5144' }}>
                <Icon name="mail" />
              </Button>
            </Fab>
          </View>
        </Container>
      </Container>

    );
  }
}

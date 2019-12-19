import React, { Component } from 'react'
import {
    Container, Text, Content, Icon,
    Card, CardItem, Thumbnail, Body,
    Left, Right, Button, Header, View, Fab, Item, Input
} from 'native-base';
import { Image } from 'react-native';

export default class PostComponent extends Component {

    render() {
        return (
            <Card>
                {/* User */}
                <CardItem>
                    <Left>
                        {/* Avatar */}
                        <Thumbnail source={this.props.profileImage} />
                        {/* Content */}
                        <Body>
                            <Text> {this.props.profile} </Text>
                            <Text note> {this.props.date} </Text>
                        </Body>
                    </Left>
                </CardItem>

                {/* post */}
                <CardItem>
                    <Body>
                        <Text>Alle <Text style={{ fontWeight: 'bold' }}>Medicintabeller</Text> i Netdoktors artikler samt
                        i den alfabetiske oversigt denne side bliver opdateret af DLI.
                        Netdoktors sider vil informationen om og deres anvendelse derfor
                        altid korrekte i forhold til de allernyeste anvisninger.
                    </Text>
                    </Body>
                </CardItem>

                {/* Content Card */}
                <CardItem cardBody>
                    {/* <Image source={require('../images/img5.jpg')} 
                        style={{ height: 200, width: null, flex: 1}}
                    /> */}
                    <Image source={this.props.bodyImage}
                        style={{ height: 200, width: null, flex: 1 }}
                    />
                </CardItem>
                {/* like, chat, share */}
                <CardItem>
                    <Left>
                        <Button transparent button onPress={() => alert("Wow! Like it for the post")}>
                            <Icon active name="thumbs-up" style={{ color: '#0288D1' }} />
                            <Text style={{ color: '#616161' }}>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent button onPress={() => alert("Wow! Like it for the post")}>
                            <Icon name="chatbubbles" style={{ color: '#BDBDBD' }} />
                            <Text style={{ color: '#616161' }}>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Button transparent button onPress={() => alert("Wow! Like it for the post")}>
                            <Icon name="share" style={{ color: '#BDBDBD' }} />
                            <Text style={{ color: '#616161' }}>share</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}
import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { Fragment } from 'react';
import {
    Container, Header, Content, Footer, FooterTab, Button, Text, Form, Item,
    Input, Icon, ListItem, List, Right, Left, Title, Body, CheckBox, Thumbnail, Root, Toast
} from 'native-base';


export default class SignIn extends React.Component {
    static navigationOptions = {
        title: 'Đăng Ký Tài Khoản',
    };
    render() {
        var { navigate } = this.props.navigation;
        return (
            <Root>
                <Container style={style.container}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 3 }}>

                        <Thumbnail large source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
                    </View>
                    <View style={{ flex: 7 }}>
                        <Form>
                            <Item>
                                <Input placeholder="Họ Tên" />
                            </Item>
                            <Item>
                                <Input placeholder="Số điện thoại" />
                            </Item>
                            <Item last>
                                <Input placeholder="Email" />
                            </Item>
                            <Item>
                                <Input placeholder="Tên đăng nhập" />
                            </Item>
                            <Item last>
                                <Input placeholder="Mật khẩu" />
                            </Item>
                            <ListItem>
                                <CheckBox checked={false} />
                                <Body>
                                    <Text>Tôi muốn đăng ký</Text>
                                </Body>
                            </ListItem>
                        </Form>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <Button
                                title="Go back"
                                onPress={() =>
                                    Toast.show({
                                        text: "Lỗi đăng ký, vui lòng nhập lại.",
                                        position: "top",
                                        buttonTextStyle: { color: "#008000" },
                                        buttonStyle: { backgroundColor: "#5cb85c" }
                                    })}
                                style={{
                                    alignItems: 'center', justifyContent: 'center', padding: 30,
                                    width: 180, height: 50, borderRadius: 100
                                }}
                            >
                                <Text style={{ justifyContent: 'center', alignContent: 'center', fontSize: 15 }} >Đăng Ký</Text>
                            </Button>

                        </View>

                    </View>
                    <Footer>
                        <FooterTab style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Nếu bạn có tài khoản?</Text>
                            <Text
                                onPress={() => this.props.navigation.navigate('Details')}
                                style={{ color: 'red' }}> Đăng nhập tại đây.</Text>
                        </FooterTab>
                    </Footer>
                </Container>
            </Root>

        )
    }
}


const style = StyleSheet.create({
    container: {
        color: 'red',
    },
})



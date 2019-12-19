import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Platform, FlatList, TouchableOpacity } from 'react-native';
import {
  Container,
  Icon,
  Item,
  Text,
  Header,
  Left,
  Right,
  Button,
  Input,
  Content,
  Fab,
  Thumbnail,
  Body,
  List,
  ListItem,
  Title,
} from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import OrderMed from '../tabs/OrderMed';
import { SearchBar } from 'react-native-elements';
import FlatListData from '/Users/macbook/Desktop/MyProject-master2/DrugStore/Data/FlatListData';

// import HeaderApp from '../HeaderApp';
// import SafeAreaView from 'react-native-safe-area-view';
class FlatListItem extends Component {
  render() {
    const { flatListNameDrug, flatListUsesDrug, flatListQuantityDrug, styleContent } = styles;
    return (
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          elevation: 2,
          margin: 5,
          // flexDirection: 'column',
          backgroundColor: '#fff',
        }}>
        {/* content */}

        <TouchableOpacity>
          <View style={{
            flex: 1,
            flexDirection: 'column'
          }}>
            <ListItem >
              <Body>
                <Text style={{
                  color: 'black',
                  padding: 8,
                  fontSize: 16,
                  fontWeight: 'bold'
                }} > {this.props.item.name} </Text>
                <Text style={{
                  color: '#616161',
                  padding: 10,
                  fontSize: 12
                }} >
                  {this.props.item.medicineDescription}
                </Text>
              </Body>

              <Right style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Icon name="ios-checkmark-circle-outline" onPress={() => { alert(' Đã thêm vào giỏ hàng! '); }} />

              </Right>

            </ListItem>
          </View>

        </TouchableOpacity>

      </View>

    );
  }
}

export default class OrderTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.state = { isLoading: true, search: '' };
    this.arrayholder = [];
  }
  state = { dataList: FlatListData }
  componentDidMount() {
    return fetch('http://www.json-generator.com/api/json/get/bUsfPnLiOG?indent=2')

      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1 }}>


        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={{ flex: 1 }}>
        <Header style={{justifyContent: 'center', alignItems: 'center' }}>
          <Title>
              Medications
          </Title>
        </Header>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
        />
        <ListItem >
          <Body>
            <FlatList
              data={this.state.dataSource}
              ItemSeparatorComponent={this.ListViewItemSeparator}
              //Item Separator View
              renderItem={({ item, index }) => {
                // Single Comes here which will be repeatative for the FlatListItems
                return (
                  // <Text style={styles.textStyle}>{item.name}</Text>
                  <FlatListItem item={item} index={index} ></FlatListItem>


                );
              }}

              enableEmptySections={true}
              keyExtractor={(item, index) => index.toString()}
            />
          </Body>
          {/* <Right>
            <Button transparent onPress={() => { alert(' Lượng thuốc trong kho còn nhiều '); }}>
              <Text>Select</Text>
            </Button>
          </Right> */}
        </ListItem>
        <ListItem >
          <Body>
            <FlatList
              data={this.state.dataSource}
              ItemSeparatorComponent={this.ListViewItemSeparator}
              //Item Separator View
              renderItem={({ item, index }) => {
                // Single Comes here which will be repeatative for the FlatListItems
                return (
                  // <Text style={styles.textStyle}>{item.name}</Text>
                  <FlatListItem item={item} index={index} ></FlatListItem>


                );
              }}

              enableEmptySections={true}
              keyExtractor={(item, index) => index.toString()}
            />
          </Body>
          {/* <Right>
            <Button transparent onPress={() => { alert(' Lượng thuốc trong kho còn nhiều '); }}>
              <Text>Select</Text>
            </Button>
          </Right> */}
        </ListItem>

        <Fab
          onPress={() => alert("Wow! Like it for the post")}
        //  onPress={() => this.props.navigation.navigate('OrderMed')}
        >
          <Icon name="cart" />
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    //marginTop: Platform.OS == 'ios' ? 30 : 0
  },
  textStyle: {
    padding: 3,
  },
});






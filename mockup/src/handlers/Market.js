import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Input } from "react-native-elements";
import {
  StyleSheet,
  StatusBar,
  View,
  AsyncStorage,
  Text,
  TextInput,
  Alert,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class Market extends Component {
  constructor(props) {
    super(props);
    let initData = JSON.stringify([
      {
        iconname: "sofa",
        displayname: "Sofa",
        count: 1,
        price: 79,
      },
      {
        iconname: "chair-rolling",
        displayname: "Chair",
        count: 2,
        price: 220,
      },
      {
        iconname: "bed-double",
        displayname: "Bed",
        count: 3,
        price: 760,
      },
      {
        iconname: "table-chair",
        displayname: "Table Chair",
        count: 4,
        price: 50,
      },
    ]);
    AsyncStorage.setItem("marketItemList", initData);
  }
  state = {
    search: null,
    count: 1,
    itemList: [],
  };

  async componentDidMount() {
    let retrive = JSON.parse(await AsyncStorage.getItem("marketItemList"));
    this.setState({
      itemList: retrive,
    });
  }

  async searchItemList(filterKey) {
    if (filterKey != "") {
      let ori_list = this.state.itemList;
      let filter_array = ori_list.filter((data) => {
        return data.displayname.includes(filterKey);
      });
      this.setState({
        itemList: filter_array,
      });
    } else {
      let retrive = JSON.parse(await AsyncStorage.getItem("marketItemList"));
      this.setState({
        itemList: retrive,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={"transparent"} />
        <View style={styles.mainView}>
          <LinearGradient
            colors={["#febd23", "#f16d25"]}
            style={{
              minHeight: 100,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "90%",
                borderRadius: 50,
                marginTop: 25,
              }}
            >
              <Input
                placeholder="Search"
                placeholderTextColor="#793d6f"
                leftIcon={{ type: "MaterialIcons", name: "search" }}
                onChangeText={(value) => this.searchItemList(value)}
                containerStyle={{ maxHeight: 50 }}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                }}
              />
            </View>
          </LinearGradient>
          <View
            style={{
              flex: 0.9,
              alignItems: "center",
              marginHorizontal: 40,
              marginTop: 20,
            }}
          >
            {this.state.itemList.length > 0 &&
              this.state.itemList.map((data, index) => {
                return (
                  <View style={styles.Card} key={index}>
                    <View
                      style={[
                        {
                          flex: 1,
                          paddingHorizontal: 10,
                          height: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                        styles.borderLeft,
                      ]}
                    >
                      <MaterialCommunityIcons
                        name={data.iconname}
                        style={{ fontSize: 60, color: "#f16d25" }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 2,
                        paddingHorizontal: 10,
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          marginBottom: 5,
                          fontWeight: "bold",
                          fontSize: 20,
                          textAlign: "center",
                          color: "black",
                        }}
                      >
                        {data.displayname}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <MaterialIcons
                          name="add"
                          style={{ fontSize: 20, marginRight: 10 }}
                          onPress={() => {
                            let ori_list = this.state.itemList;
                            ori_list[index].count = ori_list[index].count + 1;
                            this.setState({
                              itemList: ori_list,
                            });
                            let str_ori_list = JSON.stringify(ori_list);
                            AsyncStorage.setItem(
                              "marketItemList",
                              str_ori_list
                            );
                          }}
                        />
                        <TextInput
                          style={{
                            height: 40,
                            borderColor: "gray",
                            borderWidth: 1,
                            maxWidth: 40,
                          }}
                          onChangeText={() => {
                            let ori_list = this.state.itemList;
                            ori_list[index].count = ori_list[index].count + 1;
                            this.setState({
                              itemList: ori_list,
                            });
                            let str_ori_list = JSON.stringify(ori_list);
                            AsyncStorage.setItem(
                              "marketItemList",
                              str_ori_list
                            );
                          }}
                          value={String(data.count)}
                          keyboardType={"numeric"}
                        />
                        <MaterialCommunityIcons
                          name="minus"
                          style={{ fontSize: 20, marginLeft: 10 }}
                          onPress={() => {
                            let ori_list = this.state.itemList;
                            if (ori_list[index].count > 0) {
                              ori_list[index].count = ori_list[index].count - 1;
                              this.setState({
                                itemList: ori_list,
                              });
                              let str_ori_list = JSON.stringify(ori_list);
                              AsyncStorage.setItem(
                                "marketItemList",
                                str_ori_list
                              );
                            } else {
                              Alert.alert(
                                data.displayname,
                                "Item cant not less that 0 ",
                                [{ text: "OK" }],
                                { cancelable: false }
                              );
                            }
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          textDecorationLine: "line-through",
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#e1e7ec",
                        }}
                      >
                        ${data.price}
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#793d6f",
                        }}
                      >
                        ${data.price * data.count}
                      </Text>
                    </View>
                  </View>
                );
              })}
          </View>
          <View style={styles.footer}>
            <MaterialIcons
              name="storefront"
              style={styles.footerIcon}
              onPress={() => this.props.navigation.navigate("Market")}
            />
            <MaterialIcons name="shopping-bag" style={styles.footerIcon} />
            <MaterialIcons
              name="person"
              style={styles.footerIcon}
              onPress={() => this.props.navigation.navigate("Profile")}
            />
            <MaterialIcons name="settings" style={styles.footerIcon} />
            <MaterialCommunityIcons
              name="dots-horizontal"
              style={styles.footerOrangeIcon}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 1,
    backgroundColor: "#feffff",
  },
  mainView: {
    flex: 1,
    alignItems: "center",
  },
  inputAreaView: {
    margin: 30,
  },
  labelText: {
    color: "black",
    marginBottom: -10,
    marginLeft: 10,
  },
  commonTopButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#efefe5",
    borderStyle: "solid",
    borderWidth: 3,
  },
  borderLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  borderRight: {
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  commonTopButtonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  selectedButton: {
    backgroundColor: "#efefe5",
  },
  unselectedButton: {
    backgroundColor: "#feffff",
  },
  selectedButtonText: {
    color: "#795375",
  },
  unselectedButtonText: {
    color: "#bcaebd",
  },
  footer: {
    flex: 0.1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",

    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 15,
    elevation: 10,
    backgroundColor: "white",
  },
  footerIcon: {
    color: "#e1e7ec",
    fontSize: 40,
  },
  footerOrangeIcon: {
    color: "#f16d25",
    fontSize: 40,
  },
  Card: {
    height: 90,
    maxHeight: 90,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 5,

    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 15,
    elevation: 10,
    backgroundColor: "white",
  },
});

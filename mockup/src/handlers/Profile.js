import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Header, Avatar } from "react-native-elements";
import { StyleSheet, StatusBar, View, Text, AsyncStorage } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    let initUser = JSON.stringify([
      {
        username: "Road",
        password: 123,
      },
    ]);
    AsyncStorage.setItem("user", initUser);
  }
  state = {
    selected: "Login",
    PhoneNo: null,
    Password: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={"transparent"} />
        <Header
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ["#febd23", "#f16d25"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
        />
        <View style={styles.mainView}>
          <View
            style={{ flex: 0.9, alignItems: "center", marginHorizontal: 40 }}
          >
            <Avatar
              size="xlarge"
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
            />
            <Text style={{ fontSize: 25, color: "black" }}>Your Name</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location" style={{ color: "#f48f7f" }} />
              <Text style={{ fontSize: 15 }}>UserName</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                minHeight: 60,
                marginHorizontal: 10,
              }}
            >
              <MaterialIcons
                name="message"
                style={{ color: "#e1e7ec", fontSize: 30 }}
              />
              <View style={{ marginHorizontal: 15, width: "100%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: 5,
                    marginRight: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      width: "100%",
                      marginVertical: 5,
                      color: "black",
                    }}
                  >
                    Message
                  </Text>
                  <LinearGradient
                    colors={["#febd23", "#f16d25"]}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      3
                    </Text>
                  </LinearGradient>
                </View>

                <View
                  style={{
                    borderBottomColor: "#e1e7ec",
                    borderBottomWidth: 1,
                    minHeight: 1,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                minHeight: 60,
                marginHorizontal: 10,
              }}
            >
              <MaterialIcons
                name="notifications"
                style={{ color: "#e1e7ec", fontSize: 30 }}
              />
              <View style={{ marginHorizontal: 15, width: "100%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: 5,
                    marginRight: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      width: "100%",
                      marginVertical: 5,
                      color: "black",
                    }}
                  >
                    Notification
                  </Text>
                  <LinearGradient
                    colors={["#febd23", "#f16d25"]}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      5
                    </Text>
                  </LinearGradient>
                </View>

                <View
                  style={{
                    borderBottomColor: "#e1e7ec",
                    borderBottomWidth: 1,
                    minHeight: 1,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                minHeight: 60,
                marginHorizontal: 10,
              }}
            >
              <MaterialIcons
                name="person"
                style={{ color: "#e1e7ec", fontSize: 30 }}
              />
              <View style={{ marginHorizontal: 15, width: "100%" }}>
                <Text
                  style={{
                    fontSize: 20,
                    width: "100%",
                    marginVertical: 5,
                    color: "black",
                  }}
                >
                  Account Details
                </Text>
                <View
                  style={{
                    borderBottomColor: "#e1e7ec",
                    borderBottomWidth: 1,
                    minHeight: 1,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                minHeight: 60,
                marginHorizontal: 10,
              }}
            >
              <MaterialIcons
                name="shopping-cart"
                style={{ color: "#e1e7ec", fontSize: 30 }}
              />
              <View style={{ marginHorizontal: 15, width: "100%" }}>
                <Text
                  style={{
                    fontSize: 20,
                    width: "100%",
                    marginVertical: 5,
                    color: "black",
                  }}
                >
                  My Purchase
                </Text>
                <View
                  style={{
                    borderBottomColor: "#e1e7ec",
                    borderBottomWidth: 1,
                    minHeight: 1,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                minHeight: 60,
                marginHorizontal: 10,
              }}
            >
              <MaterialIcons
                name="settings"
                style={{ color: "#e1e7ec", fontSize: 30 }}
              />
              <View style={{ marginHorizontal: 15, width: "100%" }}>
                <Text
                  style={{
                    fontSize: 20,
                    width: "100%",
                    marginVertical: 5,
                    color: "black",
                  }}
                >
                  Settings
                </Text>
                <View
                  style={{
                    borderBottomColor: "#e1e7ec",
                    borderBottomWidth: 1,
                    minHeight: 1,
                  }}
                />
              </View>
            </View>
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
              onPress={() => this.props.navigation.navigate("Market")}
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
    marginTop: 20,
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
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
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
});

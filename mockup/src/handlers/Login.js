import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Header, Input, Button } from "react-native-elements";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from "react-native";

export default class Login extends Component {
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

  async loginCheck(param) {
    let user = await AsyncStorage.getItem("user").then((res) => {
      if (!res) {
        return [];
      } else {
        return JSON.parse(res);
      }
    });
    let valid = user.find(
      (data) =>
        data.username == param.PhoneNo && data.password == param.Password
    );
    if (valid) {
      this.props.navigation.navigate("Profile");
    } else {
      Alert.alert(
        "Login Failed",
        "Your phone number or password is incorrect. Please try again.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
  }

  async SingupCheck(param) {
    let user = await AsyncStorage.getItem("user").then((res) => {
      if (!res) {
        return [];
      } else {
        return JSON.parse(res);
      }
    });
    if (param.PhoneNo && param.Password) {
      let valid = user.find((data) => {
        if (data.username == param.PhoneNo && data.password == param.Password) {
          return data;
        }
      });
      if (!valid) {
        user.push({
          username: param.PhoneNo,
          password: param.Password,
        });
        let stringUser = JSON.stringify(user);
        await AsyncStorage.setItem("user", stringUser).then(async () => {
          Alert.alert(
            "Sing Up Success",
            "New user register success. Please go to login tab to login",
            [{ text: "OK" }],
            { cancelable: false }
          );
        });
      } else {
        Alert.alert(
          "User Exist",
          "Please use login tab to login to your account.",
          [{ text: "OK" }],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        "Required Field Missing ",
        "There are missing required fields.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
  }

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
        <View
          style={{
            flex: 1,
            margin: 30,
            borderRadius: 80,
            maxHeight: 80,
            flexDirection: "row",
            justifyContent: "space-around",
            flexShrink: 1,
            backgroundColor: "#efefe5",
          }}
        >
          <TouchableOpacity
            style={[
              styles.commonTopButton,
              styles.borderLeft,
              this.state.selected == "Login"
                ? styles.selectedButton
                : styles.unselectedButton,
            ]}
            onPress={() =>
              this.setState({
                selected: "Login",
              })
            }
          >
            <Text
              style={[
                styles.commonTopButtonText,
                this.state.selected == "Login"
                  ? styles.selectedButtonText
                  : styles.unselectedButtonText,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.commonTopButton,
              styles.borderRight,
              this.state.selected == "Sing In"
                ? styles.selectedButton
                : styles.unselectedButton,
            ]}
            onPress={() =>
              this.setState({
                selected: "Sing In",
              })
            }
          >
            <Text
              style={[
                styles.commonTopButtonText,
                this.state.selected == "Sing In"
                  ? styles.selectedButtonText
                  : styles.unselectedButtonText,
              ]}
            >
              Sing in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputAreaView}>
          <Input
            placeholder="+0 (000) 000-00-00"
            placeholderTextColor="black"
            onChangeText={(value) => this.setState({ PhoneNo: value })}
          />
          <Text style={styles.labelText}>Password</Text>
          <Input
            secureTextEntry={true}
            onChangeText={(value) => this.setState({ Password: value })}
          />
        </View>
        <View>
          <Button
            title={this.state.selected}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ["#fd5b3e", "#e5381b"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            buttonStyle={{
              borderRadius: 70,
              minHeight: 70,
              width: "100%",
            }}
            titleStyle={{ color: "#fff", fontSize: 30 }}
            containerStyle={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 45,
              marginHorizontal: 30,
            }}
            onPress={() =>
              this.state.selected == "Login"
                ? this.loginCheck(this.state)
                : this.SingupCheck(this.state)
            }
          />
          <Text
            style={{
              color: "#793d6f",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              marginTop: -30,
            }}
          >
            Forget Password?
          </Text>
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
    justifyContent: "center",
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
});

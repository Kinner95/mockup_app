import { createStackNavigator } from "react-navigation-stack";
import Walkthrough from "./handlers/Walkthrough";
import Login from "./handlers/Login";
import Profile from "./handlers/Profile";
import Market from "./handlers/Market";

export default AppNavigator = createStackNavigator(
  {
    Home: Walkthrough,
    Login: Login,
    Profile: Profile,
    Market: Market,
  },
  {
    initialRouteName: "Home",
    mode: "modal",
    headerMode: "none",
  }
);

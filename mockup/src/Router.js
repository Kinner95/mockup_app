import { createStackNavigator } from 'react-navigation-stack';
import Walkthrough from './handlers/Walkthrough'
import Login from './handlers/Login'

export default AppNavigator = createStackNavigator(
  {
    Home: Walkthrough,
    Login: Login
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none',
  }
);
import { createStackNavigator } from 'react-navigation-stack';
import Walkthrough from './handlers/Walkthrough'

export default AppNavigator = createStackNavigator(
  {
    Home: Walkthrough,
  },
  {
    initialRouteName: 'Home',
  }
);
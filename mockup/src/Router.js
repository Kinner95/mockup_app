import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Walkthrough', () => require('./handlers/Walkthrough').default);
}
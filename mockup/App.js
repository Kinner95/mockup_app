import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'react-native-elements';

import Router from './src/Router'

const AppContainer = createAppContainer(Router);

export default class App extends Component {
  render() {
    return (
      <ThemeProvider >
        <AppContainer />
      </ThemeProvider>
    );
  }
}
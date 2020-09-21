import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer } from 'react-navigation';

import Router from './src/Router'

const AppContainer = createAppContainer(Router);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
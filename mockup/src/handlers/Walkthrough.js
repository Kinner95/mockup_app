import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, StatusBar } from 'react-native';

export default class Walkthrough  extends Component {
  render() {
    return (
        <LinearGradient colors={['#febd23', '#f16d25']} style={styles.linearGradient}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
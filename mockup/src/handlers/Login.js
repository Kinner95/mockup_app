import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements'
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Walkthrough  extends Component {
  render() {
    return (
        <LinearGradient colors={['#febd23', '#f16d25']} style={styles.linearGradient}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.mainView}>
              <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 35, textAlign:'center', marginVertical: 60 }}>Login</Text>
                <Icon name='sofa' style={{ fontSize: 200, color: '#fff' }}/>
              </View>
              <View style={{flex:1.5, justifyContent: 'center', alignItems: 'center'}}>
                <Button 
                  title="Get Started" buttonStyle={{ backgroundColor: '#fff', borderRadius: 70, minHeight: 70, paddingHorizontal: 50 }} 
                  titleStyle={{ color: '#793d6f',fontSize: 30 }} containerStyle={{ justifyContent: 'center', alignItems: 'center', marginBottom: 45 }}
                  onPress={() => this.props.navigation.navigate('Home')}/>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Dont have account?</Text>
                <Text style={{textDecorationLine: 'underline', color: '#fff', fontWeight: 'bold', fontSize: 20}}>Sing in here</Text>
              </View>
            </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 1,
    paddingRight: 1,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
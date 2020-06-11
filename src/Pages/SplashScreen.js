import React, { useState } from 'react';
import {View, ActivityIndicator,Image,Alert} from 'react-native';
const Splash = ({ navigation }) => {
  setTimeout(() => {navigation.navigate('Auth')}, 2000)
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center'
    }}>
      <View style={{
        width: 120,
        height: 120,
        alignSelf: 'center',
        borderRadius: 30
      }}>
        <Image style={{
           width: 120,
           height: 120,
           resizeMode: 'stretch'
        }}
        source={require('../../assets/gambar.jpeg')}></Image>
      </View>
      <ActivityIndicator 
      size={32}
      color="white"
      style={{
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center'
      }}/>
    </View>
  );
};

export default Splash;

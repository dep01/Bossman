import React, { useState } from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
const Home = ({ navigation }) => {

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center'
    }}>
        <Text style={{flex:1}}>Ini login</Text>
        <TouchableOpacity style={{flex:1}}
            onPress={() => navigation.navigate('App')}
        >
        <Text style={{flex:1}}>Ini login</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Home;

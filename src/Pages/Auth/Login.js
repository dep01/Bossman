import React, { useState } from 'react';
import {View, Text,TouchableOpacity,Image} from 'react-native';
const Login = ({ navigation }) => {

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffffff'
    }}>
        <View style={{width:'100%',height:'50%'}} >
        <Image 
            source={require('../../../assets/gambar.jpeg')}
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'center',
            }}/>
        </View>
        <View style={{flex:1,padding:10,justifyContent:'center',alignItems:'center'}} > 
        <TouchableOpacity style={{width:'70%',height:'15%',backgroundColor:'black',margin:20}}
            onPress={() => navigation.navigate('Owner')}
        >
        <Text style={{flex:1,color:'white',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>OWNER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'70%',height:'15%',backgroundColor:'#ffff',borderWidth:1}}
            onPress={() => navigation.navigate('Crew')}
        >
        <Text style={{flex:1,color:'black',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>CREW</Text>
        </TouchableOpacity>
        </View>
        
    </View>
  );
};

export default Login;

import React, { useState } from 'react';
import {View, Text,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Crew = ({ navigation }) => {

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffffff',
      margin:20
    }}>
        <View style={{width:'100%',height:'10%',flexDirection:'row'}}>
            <TouchableOpacity style={{width:'10%',flexDirection:'row',justifyContent:'center',alignContent:'center'}}
            onPress={() => navigation.goBack()}>
                  <Icon name="arrow-left" color="black" size={25}  />
            </TouchableOpacity>
                  <Text style={{flex:1,fontSize:18,marginLeft:10,textAlign:'left',textAlignVertical:'top'}}>Login Crew</Text>

        </View>
        <View style={{flex:1}}>
            <TextInput 
            placeholder="Username"
            style={{width:'100%',borderWidth:1,height:50,fontSize:15,marginTop:40}}/>
            <TextInput 
            placeholder="Password"
            secureTextEntry={true}
            style={{width:'100%',borderWidth:1,height:50,fontSize:15,marginTop:20}}/>
            <TouchableOpacity style={{width:'80%',height:50,flexDirection:'row',backgroundColor:'black',justifyContent:'center',alignContent:'center',margin:35}}
            onPress={()=>navigation.navigate('HomeCrew')}>
                  <Text style={{flex:1,color:'white',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>Login</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
};

export default Crew;

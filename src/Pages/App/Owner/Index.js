import React, { useState } from 'react';
import {View, Text,TouchableOpacity,Image} from 'react-native';
const HomeOwner = ({ navigation }) => {

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffffff'
    }}>
        <View style={{width:'100%',height:'45%'}} >
        <Image 
            source={require('../../../../assets/gambar.jpeg')}
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'center',
            }}/>
        </View>
        <View style={{flex:1,padding:10,justifyContent:'flex-start',alignItems:'center'}} > 
            <View style={{width:'100%',height:'30%',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff'}} >
              <View style={{borderRadius:15,width:100,height:100,borderWidth:1,margin:5}} >
                <Text style={{flex:1,fontSize:18,textAlign:'center',textAlignVertical:'center'}}>Total</Text>
                <Text style={{flex:1,fontSize:25,textAlign:'center',textAlignVertical:'top'}}>120</Text>
              </View>
              <View style={{borderRadius:15,width:100,height:100,borderWidth:1,margin:5}} >
              <Text style={{flex:1,fontSize:18,textAlign:'center',textAlignVertical:'center'}}>Layak</Text>
                <Text style={{flex:1,fontSize:25,textAlign:'center',textAlignVertical:'top'}}>72</Text>
              </View>
              <View style={{borderRadius:15,width:100,height:100,borderWidth:1,margin:5}} >
              <Text style={{flex:1,fontSize:18,textAlign:'center',textAlignVertical:'center'}}>Tidak</Text>
                <Text style={{flex:1,fontSize:25,textAlign:'center',textAlignVertical:'top'}}>48</Text>
              </View>
            </View>
            <View style={{width:'100%',height:'70%',justifyContent:'center',alignContent:'center',alignItems:'center'}} >
              <TouchableOpacity style={{width:'80%',borderRadius:20,height:75,flexDirection:'row',backgroundColor:'black',justifyContent:'center',alignContent:'center'}}
              onPress={()=>navigation.navigate('AccPengajuan')}>
                    <Text style={{flex:1,color:'white',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>Acc pengajuan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'80%',borderRadius:20,height:75,flexDirection:'row',backgroundColor:'black',justifyContent:'center',alignContent:'center',margin:35}}
                  onPress={()=>navigation.navigate('HistoryPengajuan')}>
                    <Text style={{flex:1,color:'white',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>History pengajuan</Text>
              </TouchableOpacity>
            </View>
        </View>
        
    </View>
  );
};

export default HomeOwner;

import React, { useState } from 'react';
import {View, Text,TouchableOpacity,Image} from 'react-native';
const HomeCrew = ({ navigation }) => {

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
        {/* <View style={{flex:1,padding:10,justifyContent:'flex-start',alignItems:'center'}} > 
            <View style={{width:'100%',height:'30%',flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff'}} >
              <TouchableOpacity style={{borderRadius:15,width:100,height:100,borderWidth:1,margin:5,backgroundColor:'black'}} >
                <Text style={{flex:1,fontSize:18,textAlign:'center',textAlignVertical:'center',color:'#ffffff'}}>Barang</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius:15,width:100,height:100,borderWidth:1,margin:5,backgroundColor:'black'}} >
                <Text style={{flex:1,fontSize:18,textAlign:'center',textAlignVertical:'center',color:'#ffffff'}}>Pengajuan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius:15,width:100,height:100,borderWidth:1,margin:5,backgroundColor:'black'}} >
                <Text style={{flex:1,fontSize:18,textAlign:'center',textAlignVertical:'center',color:'#ffffff'}}>History</Text>
              </TouchableOpacity>
            </View>
        </View> */}
            <View style={{width:'100%',height:'70%',justifyContent:'flex-start',alignContent:'center',alignItems:'center'}} >
              <TouchableOpacity style={{width:'80%',borderRadius:20,height:75,flexDirection:'row',backgroundColor:'black',justifyContent:'center',alignContent:'center'}}
              onPress={()=>navigation.navigate('Barang')}
              >
                    <Text style={{flex:1,color:'white',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>Barang</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'80%',borderRadius:20,height:75,flexDirection:'row',backgroundColor:'black',justifyContent:'center',alignContent:'center',margin:20}}
                  onPress={()=>navigation.navigate('Pengajuan')}
                  >
                    <Text style={{flex:1,color:'white',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>Pengajuan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'80%',borderRadius:20,height:75,flexDirection:'row',backgroundColor:'black',justifyContent:'center',alignContent:'center'}}
                  onPress={()=>navigation.navigate('History')}
                  >
                    <Text style={{flex:1,color:'white',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>History</Text>
              </TouchableOpacity>
            </View>
    </View>
  );
};

export default HomeCrew;

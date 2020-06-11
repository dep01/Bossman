import React, { useState } from 'react';
import {View, Text,TouchableOpacity,TextInput,Picker} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Pengajuan = ({ navigation }) => {
const [selectedValue, setSelectedValue] = useState('0');
const [selectedValue1, setSelectedValue1] = useState('0');
const [selectedValue2, setSelectedValue2] = useState('0');
const [selectedValue3, setSelectedValue3] = useState('0');
const [selectedValue4, setSelectedValue4] = useState('0');
const [selectedValue5, setSelectedValue5] = useState('0');
const save =()=>{
    navigation.goBack()
}
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
                  <Text style={{flex:1,fontSize:18,marginLeft:10,textAlign:'left',textAlignVertical:'top'}}>Pengajuan</Text>

        </View>
        <View style={{flex:1}}>
            <View style={{width:'100%',height:'10%',flexDirection:'row'}}>
              <Picker
                style={{ width:'50%',color:'black'}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                selectedValue={selectedValue}
              >
                <Picker.Item label="Pilih barang" value="0" />
                <Picker.Item label="Sisir" value="Sisir" />
                <Picker.Item label="Kursi" value="Kursi" />
                <Picker.Item label="Alat Cukur" value="Alat Cukur" />
                <Picker.Item label="Cermin" value="Cermin" />
              </Picker>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Qty" ></TextInput>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Harga" ></TextInput>
            </View>
            <View style={{width:'100%',height:'10%',flexDirection:'row'}}>
              <Picker
                style={{ width:'50%',color:'black'}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
                selectedValue={selectedValue1}
              >
                <Picker.Item label="Pilih barang" value="0" />
                <Picker.Item label="Kursi" value="Kursi" />
                <Picker.Item label="Alat Cukur" value="Alat Cukur" />
                <Picker.Item label="Cermin" value="Cermin" />
              </Picker>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Qty" ></TextInput>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Harga" ></TextInput>
            </View>
            <View style={{width:'100%',height:'10%',flexDirection:'row'}}>
              <Picker
                style={{ width:'50%',color:'black'}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
                selectedValue={selectedValue2}
              >
                <Picker.Item label="Pilih barang" value="0" />
                <Picker.Item label="Alat Cukur" value="Alat Cukur" />
                <Picker.Item label="Cermin" value="Cermin" />
              </Picker>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Qty" ></TextInput>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Harga" ></TextInput>
            </View>
            <View style={{width:'100%',height:'10%',flexDirection:'row'}}>
              <Picker
                style={{ width:'50%',color:'black'}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
                selectedValue={selectedValue3}
              >
                <Picker.Item label="Pilih barang" value="0" />
                <Picker.Item label="Cermin" value="Cermin" />
              </Picker>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Qty" ></TextInput>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Harga" ></TextInput>
            </View>
            <View style={{width:'100%',height:'10%',flexDirection:'row'}}>
              <Picker
                style={{ width:'50%',color:'black'}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
                selectedValue={selectedValue4}
              >
                <Picker.Item label="Pilih barang" value="0" />
              </Picker>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Qty" ></TextInput>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Harga" ></TextInput>
            </View>
            <View style={{width:'100%',height:'10%',flexDirection:'row'}}>
              <Picker
                style={{ width:'50%',color:'black'}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue5(itemValue)}
                selectedValue={selectedValue5}
              >
                <Picker.Item label="Pilih barang" value="0" />
              </Picker>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Qty" ></TextInput>
              <TextInput keyboardType={'number-pad'} style={{flex:1}} placeholder="Harga" ></TextInput>
            </View>
            <TouchableOpacity style={{width:'80%',height:50,flexDirection:'row',backgroundColor:'black',justifyContent:'center',alignContent:'center',margin:35}}
                onPress={()=>{save()}}>
                  <Text style={{flex:1,color:'white',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>Save</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
};

export default Pengajuan;

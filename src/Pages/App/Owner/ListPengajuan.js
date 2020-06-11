import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PengajuanComponent from '../../../Component/PengajuanComponent'
import ListComponent from '../../../Component/ListComponent'
import {ListData } from '../../../Data/ListData'
const ListPengajuan = ({ navigation }) => {
  const [data, setData] = useState(ListData);
  const renderMenu = ({ item, index }) => {
    return (
      <ListComponent
        barang={item.barang}
        item={item.item}
        total={item.total}
        harga={item.harga}
      />
    )
  }
  return (
    <ScrollView
      style={Styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={Styles.Header}>
      <TouchableOpacity style={Styles.Button}
          onPress={()=>navigation.goBack()}>
            <Icon name="arrow-left" color="black" size={25}  />
        </TouchableOpacity>
     
        <Text
          numberOfLines={1}
          style={Styles.Teks}>
          Daftar barang yang diajukan
        </Text>

      </View>
      <Text
          numberOfLines={1}
          style={Styles.Teks}>
          barang        Jumlah          Harga       Total
        </Text>
      <View style={{ marginTop: 5,flex:1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={data}
          renderItem={renderMenu}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={{width:'70%',height:'15%',backgroundColor:'black',margin:50}}
            onPress={() => navigation.goBack()}
        >
        <Text style={{flex:1,color:'white',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'70%',height:'15%',backgroundColor:'black',marginHorizontal:50,marginVertical:-4}}
            onPress={() => navigation.goBack()}
        >
        <Text style={{flex:1,color:'white',fontSize:20,textAlign:'center',textAlignVertical:'center'}}>Decline</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginBottom: 10
  },
  image: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    resizeMode: 'cover',
  },
  Header: {
    flex: 1,
    minHeight: 60,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Teks: {
    flex: 1,
    margin: 10,
    fontSize: 18,
    textAlign: 'left'
  },
  Button: {
    height: 25,
    width: 25,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 5
  }
});

export default ListPengajuan;

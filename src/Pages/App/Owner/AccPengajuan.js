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
import {PengajuanData } from '../../../Data/PengajuanData'
const AccPengajuan = ({ navigation }) => {
  const [data, setData] = useState(PengajuanData);
  const renderMenu = ({ item, index }) => {
    return (
      <PengajuanComponent
        action={()=>navigation.navigate('ListPengajuan')}
        nomor={item.nomor}
        pengaju={item.pengaju}
        totalitem={item.totalitem}
        tanggal={item.tanggal}
        status={item.status}
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
          List Pengajuan
        </Text>

      </View>

      <View style={{ marginTop: 5 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={data}
          renderItem={renderMenu}
          keyExtractor={(item, index) => index.toString()}
        />
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

export default AccPengajuan;

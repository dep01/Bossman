import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
const PengajuanComponent = ({ barang,item,total,harga}) => {
    return (
        <View
            style={Styles.Button}>
            <Text
                numberOfLines={1}
                style={[Styles.TextInfo2,{width:100}]}>
                {barang}
            </Text>
            <Text
                numberOfLines={1}
                style={[Styles.TextInfo2,{width:100}]}>
                {item}
            </Text>
            <Text
                numberOfLines={1}
                style={[Styles.TextInfo2,{width:80}]}>
                {harga}
            </Text>
            <Text
                numberOfLines={1}
                style={[Styles.TextInfo2,{width:100}]}>
                {total}
            </Text>
        </View>
    );
};

export default PengajuanComponent;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    containerHeader: {
        flex: 1,
        maxHeight: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
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
    Button: {
        height: 20,
        borderWidth: 0,
        borderBottomWidth: 0.5,
        borderColor: '#D3D3D3',
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 10,

    },
    TextHeader: {
        flex: 1,
        fontSize: 14,
        textAlign: 'left'
    },
    TextInfo: {
        flex: 1,
        fontSize: 14,
        textAlign: 'left'
    },
    TextInfo2: {
        fontSize: 14,
        textAlign:'left'
    }

});

import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
const HistoryComponent = ({ nomor,pengaju, totalitem, tanggal, status, harga,action}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={Styles.Button}>
            <View style={Styles.containerHeader}>
                <View style={{ width:'50%', flexDirection: 'column', paddingLeft: 10}}>
                    <Text
                        numberOfLines={1}
                        style={Styles.TextHeader}>
                        {pengaju}-{nomor}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={Styles.TextInfo}>
                        Total item - {totalitem}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={Styles.TextInfo}>
                        Harga - {harga}
                    </Text>
                </View>
                <View style={{width:'40%', flexDirection: 'column'}}>
                    <Text
                        numberOfLines={1}
                        style={[Styles.TextInfo2,{textAlign:'right'}]}>
                        {tanggal}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={[Styles.TextInfo2,{textAlign:'right'}]}>
                        {status}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default HistoryComponent;
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
        flex: 1,
        height: 100,
        borderWidth: 0,
        borderBottomWidth: 0.5,
        borderColor: '#D3D3D3',
        flexDirection: 'column',
        marginHorizontal: 5,

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
        flex: 1,
        fontSize: 14,
    }

});

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import TextStyle from '../constants/TextStyle';

const CategoryScreenHeader = props => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => props.navigation.goBack()}>
                <Ionicons name="chevron-back" color={Colors.DarkWhite} size={25} />
            </TouchableOpacity>
            <Text style={TextStyle.Headline3}>Category</Text>
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => { }}>
                <Ionicons name="search" color={Colors.DarkWhite} size={20} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        paddingVertical: 5,
    }
});

export default CategoryScreenHeader;
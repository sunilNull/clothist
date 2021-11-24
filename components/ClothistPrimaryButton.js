import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import TextStyle from '../constants/TextStyle'

const ClothistPrimaryButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.9}>
            <View style={{...styles.primaryBtn, ...props.style}}>
                <Text style={[styles.btnText, TextStyle.Text14Px]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryBtn:{
        marginVertical: 10,
        backgroundColor: Colors.DarkPrimary,
        borderRadius: 25,
        padding: 20
    },
    btnText:{
        color: Colors.LightestGray,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})

export default ClothistPrimaryButton;
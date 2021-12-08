import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import TextStyle from '../constants/TextStyle'

const SaleBanner = props => {
    return (
        <View style={[styles.container, {backgroundColor:props.bgColor}]}>
            <Text style={{...TextStyle.Headline2, color: Colors.DarkWhite}}>{props.title}</Text>
            <Text style={{...TextStyle.Text14Px, color: Colors.DarkWhite}}>{props.subTitle}</Text>
        </View>
    )
}

export default SaleBanner

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 28,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

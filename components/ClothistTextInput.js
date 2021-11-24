import React from 'react'
import { StyleSheet,TextInput } from 'react-native';
import Colors from '../constants/Colors'
import TextStyle from '../constants/TextStyle';

const ClothistTextInput = props => {
    return (
        <TextInput style={{...styles.txtInput, ...TextStyle.Text14Px}} placeholder={props.label} placeholderTextColor={Colors.DarkGray} />
    )
}

const styles = StyleSheet.create({
    txtInput: {
        marginBottom: 8,
        backgroundColor: Colors.Dark,
        padding: 25,
        borderRadius: 5,
        alignItems: 'center',
        lineHeight: 20
    }
})

export default ClothistTextInput;
import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'

const SocialButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.9}>
            <View style={styles.socialBtn}>
                <Image resizeMode="contain" style={styles.socialBtnImg} source={props.image} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    socialBtn: {
        marginHorizontal: 8,
        backgroundColor: '#fff',
        borderRadius: 24,
        paddingVertical: 20,
        paddingHorizontal: 35
    },
    socialBtnImg: {
        width: 25,
        height: 25
    }
})

export default SocialButton;
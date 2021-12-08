import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../constants/Colors'
import TextStyle from '../constants/TextStyle'

const CategoryCard = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.component}>
                <View style={styles.cardText}>
                    <Text style={TextStyle.Headline2}>{props.title}</Text>
                </View>
                <Image source={props.image} resizeMode='cover' style={styles.cardImage} />
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    component: {
        borderRadius: 8,
        marginVertical: 8,
        backgroundColor: Colors.Dark,
        flexDirection: 'row',
        height: 100,
        overflow: 'hidden'
    },
    cardText: {
        width: '50%',
        justifyContent: 'center',
        paddingLeft: 23
    },
    cardImage: {
        height: 100,
        width: '50%'
    }
})

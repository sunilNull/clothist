import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import TextStyle from '../constants/TextStyle';

const ProductCard = props => {
    const NewLabelTeg = () => {
        return (
            <View style={styles.productTagNew}>
                <Text style={[TextStyle.Text11Px, styles.productTagNewText]}>New</Text>
            </View>
        )
    }
    const SaleLabelTag = () => {
        return (
            <View style={[styles.productTagNew, { backgroundColor: Colors.DarkHot }]}>
                <Text style={[TextStyle.Text11Px, styles.productTagNewText]}>{'-20'}</Text>
            </View>
        )
    }
    const ReviewStarViews = props => {
        var stars = []
        for (let i = 0; i < props.totalStars; i++) {
            stars.push(<Ionicons name='star' color='gold' size={13} />)
        }
        const stars_len = stars.length;
        for (let i = 0; i < 5-stars_len; i++) {
            stars.push(<Ionicons name='star-outline' color={Colors.DarkGray} size={13} />)
        }
        return (
            <View style={{flexDirection:'row'}}>{stars}</View>
        )
    }
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.container}>
                <View style={styles.productImageView}>
                    <ImageBackground
                        style={styles.productImage}
                        source={props.image}
                        resizeMode="cover"
                    >
                        {props.isNew ? <NewLabelTeg /> : <></>}
                        {props.isOnSale ? <SaleLabelTag /> : <></>}
                    </ImageBackground>
                    <View style={styles.rattingView}>
                        {<ReviewStarViews totalStars={props.stars} />}
                        <Text style={styles.totalRating}>({props.totalReviews})</Text>
                    </View>
                    <View style={styles.productInfo}>
                        <Text style={[TextStyle.Text11Px, { color: Colors.DarkGray }]}>{props.brand}</Text>
                        <Text style={[TextStyle.Text16Px, { color: Colors.DarkWhite, paddingTop: 2 }]}>{props.name}</Text>
                        <Text style={[TextStyle.Text14Px, { color: Colors.DarkWhite, paddingTop: 2 }]}>{props.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8
    },
    productImageView: {
    },
    productImage: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 184,
        width: 148
    },
    productTagNew: {
        margin: 5,
        padding: 5,
        width: '25%',
        borderRadius: 29,
        backgroundColor: Colors.DarkBackground
    },
    productTagNewText: {
        textAlign: 'center',
        color: Colors.DarkWhite
    },
    addFavIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35 / 2,
        padding: 2,
        width: 35,
        height: 35,
        backgroundColor: Colors.Dark
    },
    rattingView: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 5
    },
    totalRating: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 10,
        color: Colors.DarkGray,
        paddingHorizontal: 5
    },
    productInfo: {
        paddingVertical: 5
    }
});

export default ProductCard;
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import TextStyle from '../constants/TextStyle';

const ProductCard = () => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.container}>
                <View style={styles.productImageView}>
                    <ImageBackground
                        style={styles.productImage}
                        source={require("../assets/images/productcard_model1.jpg")}
                        resizeMode="cover"
                    >
                        <View style={styles.productTagNew}>
                            <Text style={[TextStyle.Text11Px, styles.productTagNewText]}>New</Text>
                        </View>
                        {/* <View style={[styles.productTagNew,{backgroundColor:Colors.DarkHot}]}>
                            <Text style={[TextStyle.Text11Px, styles.productTagNewText]}>{'-20'}</Text>
                        </View> */}
                        <View style={styles.addFavIcon}>
                            <Ionicons name='heart-outline' color={Colors.DarkGray} size={20} />
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

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
        borderRadius: 35/2,
        padding:2,
        width: 35,
        height: 35,
        backgroundColor: Colors.Dark
    }
});

export default ProductCard;
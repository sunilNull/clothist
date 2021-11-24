import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors';
import TextStyle from '../constants/TextStyle';
import ProductCard from './ProductCard';

const ProductCollection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.subHeader}>
                    <Text style={styles.collectionTitle}>New</Text>
                    <Text style={{...TextStyle.Text11Px,...styles.collectionSubtitle}}>you've never seen it before!</Text>
                </View>
                <Text style={{...TextStyle.Text11Px,...styles.seeMoreBtn}}>view all</Text>
            </View>
            <View style={styles.body}>
                <ProductCard />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom:10,
        marginTop: 10,
        marginLeft: 25,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    subHeader:{
        justifyContent: 'space-evenly',
    },
    collectionTitle:{
        fontFamily: 'Metropolis-Bold',
        fontSize: 34
    },
    collectionSubtitle: {
        color: Colors.DarkGray
    },
    seeMoreBtn: {
        color: Colors.DarkWhite,
        marginRight: 5
    },
    body:{

    }
});

export default ProductCollection;
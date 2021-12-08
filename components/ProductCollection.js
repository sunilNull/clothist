import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors';
import TextStyle from '../constants/TextStyle';
import ProductCard from './ProductCard';

const ProductCollection = props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.subHeader}>
                    <Text style={styles.collectionTitle}>{props.title}</Text>
                    <Text style={{ ...TextStyle.Text11Px, ...styles.collectionSubtitle }}>{props.subTitle}</Text>
                </View>
                <Text style={{ ...TextStyle.Text11Px, ...styles.seeMoreBtn }}>view all</Text>
            </View>
            <FlatList
                keyExtractor={(item, index) => {
                    return item.id;
                  }}
                horizontal={true}
                contentContainerStyle={styles.body}
                data={props.productsData}
                renderItem={(productItem) => (
                    <ProductCard
                        id={productItem.item.id}
                        name={productItem.item.name}
                        brand={productItem.item.brand}
                        price={productItem.item.price}
                        image={productItem.item.image}
                        totalReviews={productItem.item.totalReviews}
                        stars={productItem.item.stars}
                        isNew={productItem.item.isNew}
                        isOnSale={productItem.item.isOnSale}
                    />
                )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    subHeader: {
        justifyContent: 'space-evenly',
    },
    collectionTitle: {
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
    body: {
        marginLeft: -5,
        flexGrow: 1,
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default ProductCollection;
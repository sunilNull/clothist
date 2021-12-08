import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import CategoryCard from '../components/CategoryCard'
import SaleBanner from '../components/SaleBanner'
import Colors from '../constants/Colors'

const ProductCategories = [
    {
        id: 'cat1',
        title: 'New',
        image: require('../assets/images/categories/new.jpg')
    },
    {
        id: 'cat2',
        title: 'Clothes',
        image: require('../assets/images/categories/cloaths.jpg')
    },
    {
        id: 'cat3',
        title: 'Shoes',
        image: require('../assets/images/categories/shoes.jpg')
    },
    {
        id: 'cat4',
        title: 'Accesories',
        image: require('../assets/images/categories/accesories.jpg')
    }
]
const CategorySubTabScreen = props => {
    return (
        <View style={styles.screen}>
            <SaleBanner
                bgColor={Colors.DarkHot}
                title='SUMMER SALES'
                subTitle='Up to 50% off'
            />
            <FlatList
                keyExtractor={(item) => item.id}
                data={ProductCategories}
                contentContainerStyle={styles.categoryContainer}
                renderItem={(category) => (
                    <CategoryCard
                        id={category.item.id}
                        title={category.item.title}
                        image={category.item.image}
                        onPress={() => console.log(props.navigation)}
                    />
                )}
            />
        </View>
    )
}

export default CategorySubTabScreen

const styles = StyleSheet.create({
    screen: {
        marginTop: 16,
        marginHorizontal: 16
    },
    categoryContainer: {
       marginTop: 8
    }
})

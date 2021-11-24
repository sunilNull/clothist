import React from 'react'
import {
    StyleSheet, Keyboard, ImageBackground, View,
    TouchableWithoutFeedback, ScrollView, Text, SafeAreaView
} from 'react-native';
import ClothistPrimaryButton from '../components/ClothistPrimaryButton';
import ProductCollection from '../components/ProductCollection';

import Colors from '../constants/Colors'

const HomeTabScreen = props => {
    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.screen}>
                    <ScrollView>
                        <ImageBackground
                            style={styles.HeaderSaleImage}
                            source={require("../assets/images/girl.jpg")}
                        >
                            <View style={styles.imageView}>
                                <Text style={styles.HeaderSaleText}>Fashion{'\n'}sale</Text>
                                <ClothistPrimaryButton style={styles.myCustBtnStyle} title="Check" />
                            </View>
                        </ImageBackground>

                        <ProductCollection />
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        // paddingBottom:10
        // flex: 1,
        // backgroundColor: Colors.DarkBackground,
        // alignItems: 'center'
    },
    scrollContainer: {
        flexGrow: 1,
    },
    HeaderSaleImageView: {
        width: '100%',
        height: 600,
        backgroundColor: 'red',
    },
    HeaderSaleImage: {
        width: '100%',
        height: 600,
        justifyContent: 'flex-end'
    },
    imageView: {
        marginBottom: 25,
        paddingHorizontal: 20,
    },
    HeaderSaleText: {
        color: Colors.LightWhite,
        fontSize: 48,
        lineHeight: 48,
        textAlign: 'justify',
        fontFamily: 'Metropolis-Bold',
        paddingVertical: 20,
    },
    myCustBtnStyle: {
        width: '40%',
        padding: 10,
    }
});

export default HomeTabScreen;
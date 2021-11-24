import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ClothistTextInput from '../components/ClothistTextInput';
import ClothistPrimaryButton from '../components/ClothistPrimaryButton';

import TextStyle from '../constants/TextStyle'
import Colors from '../constants/Colors';

const ForgotPwdScreen = props => {
    const changeScreen = screenName => {
        props.navigation.navigate(screenName)
    }
    return (
        <View style={styles.screen}>
            <View style={styles.screenHeader}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.goBack()}>
                    <Ionicons name="chevron-back" color={Colors.DarkWhite} size={25} />
                </TouchableOpacity>
                <Text style={{ ...TextStyle.Headline, ...styles.myCustomHead }}>Forgot password</Text>
            </View>
            <View style={styles.screenBody}>
                <Text style={[TextStyle.Text14Px, {marginBottom: 16}]}>
                    Please, enter your email address. You will receive a link to create a new password via email.
                </Text>
                <ClothistTextInput label="Email" />

                <ClothistPrimaryButton style={styles.myCustBtnStyle} title="send" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20
    },
    screenHeader: {
        marginTop: 40
    },
    myCustomHead: {
        marginTop: 30
    },
    screenBody: {
        marginTop: 75,
    },
    myCustBtnStyle: {
        marginTop: 55
    }
})

export default ForgotPwdScreen;
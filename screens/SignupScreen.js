import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ClothistTextInput from '../components/ClothistTextInput'
import ClothistPrimaryButton from '../components/ClothistPrimaryButton';
import SocialButton from '../components/SocialButton';

import Colors from '../constants/Colors';

import TextStyle from '../constants/TextStyle'

const SignupScreen = props => {
    const changeScreen = screenName => {
        props.navigation.navigate(screenName)
    }
    return (
        <View style={styles.screen}>
            <View style={styles.screenHeader}>
                <Text style={TextStyle.Headline}>Sign up</Text>
            </View>
            <View style={styles.screenBody}>
                <ClothistTextInput label="Name" />
                <ClothistTextInput label="Email" />
                <ClothistTextInput label="Password" />
                <TouchableOpacity activeOpacity={0.9} onPress={() => changeScreen('Login')}>
                    <View style={styles.screenBodyHelper}>
                        <Text style={TextStyle.Text14Px}>Already have an account?</Text>
                        <Ionicons name="arrow-forward" color={Colors.DarkPrimary} size={20} />
                    </View>
                </TouchableOpacity>

                <ClothistPrimaryButton
                    style={styles.myCustBtnStyle}
                    title="sign up"
                    onPress={() => changeScreen('home')}
                />
            </View>
            <View style={styles.screenFooter}>
                <Text style={TextStyle.Text14Px}>Or sign up with social account</Text>
                <View style={styles.footerSocialBtn}>
                    <SocialButton image={require('../assets/images/social/google.jpg')}/>
                    <SocialButton image={require('../assets/images/social/facebook.jpg')}/>
                </View>
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
        marginTop: 70
    },
    screenBody: {
        marginTop: 75
    },
    screenBodyHelper: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        justifyContent: 'flex-end'
    },
    myCustBtnStyle: {
        marginTop: 25
    },
    screenFooter:{
        marginTop: 120,
        alignItems: 'center'
    },
    footerSocialBtn: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SignupScreen;
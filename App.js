import React from 'react'
import { useColorScheme, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from './screens/SignupScreen';
import LogInScreen from './screens/LogInScreen';
import ForgotPwdScreen from './screens/ForgotPwdScreen';
import HomeScreen from './screens/HomeScreen';

import TextStyle from './constants/TextStyle';
import Colors from './constants/Colors';

const Stack = createNativeStackNavigator();

const MyDefaultTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background: Colors.LightBackground,
        text: Colors.Black
    },
}

const MyDarkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
        background: Colors.DarkBackground,
        text: Colors.DarkWhite
    },
}


const App = () => {
    const scheme = useColorScheme();
    return (
        <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : MyDefaultTheme}>
            <Stack.Navigator initialRouteName="signup">
                <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }} />
                <Stack.Screen name="forgotPwd" component={ForgotPwdScreen} options={{ headerShown: false }} />
                <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: '',
        fontWeight: '',
        fontSize: '34',
    }
})

export default App;

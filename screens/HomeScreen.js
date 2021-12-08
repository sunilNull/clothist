import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeTabScreen from './HomeTabScreen';
import CategoryTabScreen from './CategoryTabScreen';
import CartTabScreen from './CartTabScreen';
import FavoriteTabScreen from './FavoriteTabScreen';
import ProfileTabScreen from './ProfileTabScreen';

import Colors from '../constants/Colors';
import TextStyle from '../constants/TextStyle';

const Tab = createBottomTabNavigator();

const HomeScreen = props => {
    return (
        <Tab.Navigator
            initialRouteName="categoryTab"
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: Colors.Dark,
                    height: 70,
                    borderTopColor: Colors.Dark,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    paddingTop: 8,
                    paddingBottom: 20,
                    overflow: 'hidden'
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'homeTab') {
                        iconName = focused
                            ? 'md-home-sharp'
                            : 'md-home-sharp';
                    }
                    else if (route.name === 'categoryTab') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    else if (route.name === 'cartTab') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    else if (route.name === 'favoriteTab') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }
                    else if (route.name === 'profileTab') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Colors.DarkPrimary,
                tabBarInactiveTintColor: Colors.DarkGray,
            })}
        >
            <Tab.Screen name="homeTab" options={{ headerShown: false, tabBarLabel: 'Home' }}>
                {() => <HomeTabScreen navigation={props.navigation} />}
            </Tab.Screen>
            <Tab.Screen name="categoryTab" options={{ headerShown: false}}>
                {() => <CategoryTabScreen navigation={props.navigation} />}
            </Tab.Screen>
            <Tab.Screen name="cartTab" options={{ headerShown: false, tabBarLabel: 'Bag' }}>
                {() => <CartTabScreen navigation={props.navigation} />}
            </Tab.Screen>
            <Tab.Screen name="favoriteTab" options={{ headerShown: false, tabBarLabel: 'Favorites' }}>
                {() => <FavoriteTabScreen navigation={props.navigation} />}
            </Tab.Screen>
            <Tab.Screen name="profileTab" options={{ headerShown: false, tabBarLabel: 'Profile' }}>
                {() => <ProfileTabScreen navigation={props.navigation} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})

export default HomeScreen;
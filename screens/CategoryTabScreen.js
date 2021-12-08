import React from 'react'
import { useColorScheme, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import TextStyle from '../constants/TextStyle';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategorySubTabScreen from './CategorySubTabScreen';
import CategoryScreenHeader from '../components/CategoryScreenHeader';

const TopTab = createMaterialTopTabNavigator();

const CategoryTabScreen = props => {
    return (
        <View style={{ flex: 1 }}>
            <CategoryScreenHeader navigation={props.navigation} />
            <TopTab.Navigator
                screenOptions={{
                    tabBarLabelStyle: {
                        ...TextStyle.Text16Px,
                        color: Colors.LightestGray,
                        textTransform: 'capitalize'
                    },
                    tabBarStyle: {
                        backgroundColor: Colors.DarkBackground,
                    },
                }}
            >
                <TopTab.Screen name="Women" component={CategorySubTabScreen}/>
                <TopTab.Screen name="Men" component={CategorySubTabScreen} />
                <TopTab.Screen name="Kids" component={CategorySubTabScreen} />
            </TopTab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
});

export default CategoryTabScreen;

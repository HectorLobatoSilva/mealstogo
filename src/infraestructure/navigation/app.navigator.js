import React from 'react';
import { Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SafeArea } from './../../components/utility/safe-area.component';
import RestaurantNavigator from './restaurant.navigator';
import MapScreen from '../../features/map/screens/map.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
};

const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};

const Settings = () => (
    <SafeArea>
        <Text>Settings</Text>
    </SafeArea>
);

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen
                    name="Restaurants"
                    component={RestaurantNavigator}
                />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

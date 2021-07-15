import React from 'react';
import { Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RestaurantsScreen from './../../features/restaurants/screens/restaurants.screen';
import { SafeArea } from './../../components/utility/safe-area.component';

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
const Map = () => (
    <SafeArea>
        <Text>Map</Text>
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
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

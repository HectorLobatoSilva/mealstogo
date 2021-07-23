import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RestaurantNavigator from './restaurant.navigator';
import MapScreen from '../../features/map/screens/map.screen';
import FavouritesContextProvider from '../../services/favourites/favourites.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import SettingsNavigator from './settings.navigator';

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

const AppNavigator = () => {
    return (
        <FavouritesContextProvider>
            <LocationContextProvider>
                <RestaurantsContextProvider>
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
                        <Tab.Screen
                            name="Settings"
                            component={SettingsNavigator}
                        />
                    </Tab.Navigator>
                </RestaurantsContextProvider>
            </LocationContextProvider>
        </FavouritesContextProvider>
    );
};

export default AppNavigator;

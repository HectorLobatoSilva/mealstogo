import React from 'react';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen';
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator
            headerMode="none"
            screenOptions={{ ...TransitionPresets.ModalTransition }}>
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};

export default RestaurantNavigator;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/infraestructure/theme';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import Navigation from './src/infraestructure/navigation';
import FavouritesContextProvider from './src/services/favourites/favourites.context';

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <FavouritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Navigation />
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavouritesContextProvider>
            </ThemeProvider>
        </>
    );
};

export default App;

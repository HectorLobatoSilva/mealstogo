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
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthenticationContextProvider>
                    <FavouritesContextProvider>
                        <LocationContextProvider>
                            <RestaurantsContextProvider>
                                <Navigation />
                            </RestaurantsContextProvider>
                        </LocationContextProvider>
                    </FavouritesContextProvider>
                </AuthenticationContextProvider>
            </ThemeProvider>
        </>
    );
};

export default App;

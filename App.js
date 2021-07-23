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
import Navigation from './src/infraestructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthenticationContextProvider>
                    <Navigation />
                </AuthenticationContextProvider>
            </ThemeProvider>
        </>
    );
};

export default App;

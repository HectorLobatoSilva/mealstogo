import React, { useState, createContext } from 'react';

import {
    loginRequest,
    registerRequest,
    checkUserState,
    logoutRequest,
} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    checkUserState(usr => {
        if (usr) {
            setUser(usr);
        }
        setIsLoading(false);
    });

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then(u => {
                setUser(u);
                setIsLoading(false);
            })
            .catch(e => {
                setIsLoading(false);
                setError(e.toString());
                console.log(e);
            });
    };

    const onRegister = (email, password, repeteatedPassword) => {
        if (password !== repeteatedPassword) {
            setError('The passwords have to be equals');
            return;
        }
        if (!password || !repeteatedPassword) {
            setError('Password is required');
            return;
        }
        setIsLoading(true);
        registerRequest(email, password)
            .then(u => setUser(u))
            .catch(e => setError(e))
            .finally(() => setIsLoading(false));
    };

    const onLogout = () => {
        setUser(null);
        logoutRequest();
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

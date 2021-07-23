import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from './../authentication/authentication.context';

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext);
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        } catch (err) {
            console.log(err);
        }
    };

    const getFavourites = async uid => {
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`);
            if (value !== null) {
                setFavourites(JSON.parse(value));
            }
        } catch (e) {
            console.log('Error storing', e);
        }
    };

    const addFavourites = restaurant => {
        setFavourites([...favourites, restaurant]);
    };

    const removeFavourites = restaurant => {
        const newFavourites = favourites.filter(
            res => res.placeId !== restaurant.placeId,
        );
        setFavourites(newFavourites);
    };

    useEffect(() => {
        if (user) {
            getFavourites(user.uid);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            saveFavourites(favourites, user.uid);
        }
    }, [favourites, user]);

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addFavourites,
                removeFavourites,
            }}>
            {children}
        </FavouritesContext.Provider>
    );
};

export default FavouritesContextProvider;

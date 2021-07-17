import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async () => {
        try {
            const value = JSON.stringify(favourites);
            await AsyncStorage.setItem('favourites', value);
        } catch (err) {
            console.log(err);
        }
    };

    const getFavourites = async () => {
        try {
            const value = await AsyncStorage.getItem('favourites');
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
        getFavourites();
    }, []);

    useEffect(() => {
        saveFavourites(favourites);
    }, [favourites]);

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

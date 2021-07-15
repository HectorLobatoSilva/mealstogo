import React, { useState, createContext, useEffect } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState('');

    const search = searchKeyword => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    };

    const searchRequest = searchKeyword => {
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then(response => {
                setLocation(response);
            })
            .catch(err => {
                console.log('err', err);
                setError(err);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        if (!keyword.length) {
            return;
        }
        searchRequest(keyword);
    }, [keyword]);

    return (
        <LocationContext.Provider
            value={{ location, isLoading, error, search, keyword }}>
            {children}
        </LocationContext.Provider>
    );
};

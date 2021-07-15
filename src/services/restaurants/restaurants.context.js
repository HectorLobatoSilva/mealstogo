import React, {
    useState,
    useEffect,
    useContext,
    createContext,
    useMemo,
} from 'react';
import { LocationContext } from '../location/location.context';

import { restaurantsRequest } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = locationString => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(locationString)
                .then(response => {
                    setRestaurants(response);
                })
                .catch(err => {
                    console.log('restaurant service error', err);
                    setError(err);
                })
                .finally(() => setIsLoading(false));
        }, 2000);
    };

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
        return () => clearTimeout();
    }, [location]);

    return (
        <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
            {children}
        </RestaurantsContext.Provider>
    );
};

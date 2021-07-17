import React, { useContext, useEffect, useState } from 'react';
import MapView from 'react-native-maps';

import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import MapCallOutRestaurant from '../components/map-callout.component';

import SearchComponent from './../components/search.component';

const Map = styled(MapView)`
    height: 100%
    width: 100%;
`;

const MapScreen = ({ navigation }) => {
    const [latDelta, setLatDelta] = useState(0);

    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
    const { lat, lng, viewport } = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        const latDelta = northeastLat - southwestLat;
        setLatDelta(latDelta);
    }, [location, restaurants, viewport]);
    return (
        <>
            <SearchComponent />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}>
                {restaurants.map(restaurant => {
                    return (
                        <MapView.Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}>
                            <MapView.Callout
                                onPress={() =>
                                    navigation.navigate('RestaurantDetail', {
                                        restaurant,
                                    })
                                }>
                                <MapCallOutRestaurant restaurant={restaurant} />
                            </MapView.Callout>
                        </MapView.Marker>
                    );
                })}
            </Map>
        </>
    );
};

export default MapScreen;

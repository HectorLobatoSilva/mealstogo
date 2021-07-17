import React from 'react';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../../../components/restaurant/compact-restaurant-info';

const MyText = styled.Text``;

const MapCallOutRestaurant = ({ restaurant }) => {
    return <CompactRestaurantInfo restaurant={restaurant} />;
};

export default MapCallOutRestaurant;

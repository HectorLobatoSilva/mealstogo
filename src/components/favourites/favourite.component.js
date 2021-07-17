import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../services/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 3;
`;

const Favourite = ({ restaurant }) => {
    const { favourites, addFavourites, removeFavourites } =
        useContext(FavouritesContext);
    const isFavourite = favourites.find(r => r.placeId === restaurant.placeId);
    return (
        <FavouriteButton
            onPress={() =>
                !isFavourite
                    ? addFavourites(restaurant)
                    : removeFavourites(restaurant)
            }>
            <AntDesign
                name={isFavourite ? 'heart' : 'hearto'}
                size={24}
                color={isFavourite ? 'red' : 'white'}
            />
        </FavouriteButton>
    );
};

export default Favourite;

import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info';
import Spacer from '../spacer/spacer.component';
import Text from '../typography/text.component';

const FavouritesWrapper = styled.View`
    padding: 10px;
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null;
    }
    return (
        <FavouritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map(restaurant => (
                    <Spacer key={restaurant.name} position="left" size="large">
                        <TouchableOpacity
                            onPress={() =>
                                onNavigate('RestaurantDetail', { restaurant })
                            }>
                            <CompactRestaurantInfo restaurant={restaurant} />
                        </TouchableOpacity>
                    </Spacer>
                ))}
            </ScrollView>
        </FavouritesWrapper>
    );
};

export default FavouritesBar;

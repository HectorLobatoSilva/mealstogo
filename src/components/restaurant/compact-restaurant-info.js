import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const CompactImage = styled.Image`
    border-radius: 15px;
    width: 120px;
    height: 120px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const CompactRestaurantInfo = ({ restaurant }) => {
    return (
        <Item>
            <CompactImage
                source={{
                    uri: restaurant.photos[0],
                    headers: {
                        Accept: '*/*',
                    },
                }}
            />
            <Text center variant="caption">
                {restaurant.name}
            </Text>
        </Item>
    );
};

export default CompactRestaurantInfo;

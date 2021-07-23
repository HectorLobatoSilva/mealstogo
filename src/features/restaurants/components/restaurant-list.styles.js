import styled from 'styled-components/native';
import { FlatList } from 'react-native';

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

export default RestaurantList;

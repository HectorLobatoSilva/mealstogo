import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { StatusBar, SafeAreaView, FlatList } from 'react-native';
import styled from 'styled-components/native';

import RestaurantInfoCard from './../components/restaurant-info.component';
import Spacer from '../../../components/spacer/spacer.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import Search from './../components/search.component';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const LoadingScreen = styled(ActivityIndicator)`
    flex: 1;
`;

const ErrorScreen = styled.Text`
    flex: 1;
    color: red;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RestaurantsScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);

    return (
        <SafeArea>
            <Search />
            {isLoading ? (
                <LoadingScreen animating={true} size="large" />
            ) : !error ? (
                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) => (
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    )}
                    keyExtractor={item => item.name}
                />
            ) : (
                <ErrorScreen>{error}</ErrorScreen>
            )}
        </SafeArea>
    );
};

export default RestaurantsScreen;

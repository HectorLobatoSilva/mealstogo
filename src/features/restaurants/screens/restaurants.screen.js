import React, { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import {
    StatusBar,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';

import RestaurantInfoCard from './../components/restaurant-info.component';
import Spacer from '../../../components/spacer/spacer.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import Search from './../components/search.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import FavouritesBar from '../../../components/favourites/favourites-bar.components';

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

const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    const { favourites } = useContext(FavouritesContext);

    const [isToggled, setIsToggled] = useState(false);

    const handlePress = restaurant => {
        navigation.navigate('RestaurantDetail', { restaurant });
    };

    return (
        <SafeArea>
            <Search
                isFavouritesToggle={isToggled}
                onToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled && (
                <FavouritesBar
                    favourites={favourites}
                    onNavigate={navigation.navigate}
                />
            )}
            {isLoading ? (
                <LoadingScreen animating={true} size="large" />
            ) : !error ? (
                <RestaurantList
                    data={restaurants}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePress(item)}>
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>
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

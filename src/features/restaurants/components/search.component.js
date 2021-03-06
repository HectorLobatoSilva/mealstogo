import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';

import styled from 'styled-components/native';

import { LocationContext } from './../../../services/location/location.context';

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[3]};
`;

const SearchComponent = ({ isFavouritesToggle, onToggle }) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer>
            <Searchbar
                icon={isFavouritesToggle ? 'heart' : 'heart-outline'}
                iconColor={isFavouritesToggle ? 'red' : 'gray'}
                onIconPress={onToggle}
                placeholder="Search for location"
                value={searchKeyword}
                onSubmitEditing={() => search(searchKeyword)}
                onChangeText={query => {
                    setSearchKeyword(query);
                }}
            />
        </SearchContainer>
    );
};

export default SearchComponent;

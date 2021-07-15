import React, { useContext, useState } from 'react';
import { Searchbar } from 'react-native-paper';

import styled from 'styled-components/native';

import { LocationContext } from './../../../services/location/location.context';

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[3]};
`;

const SearchComponent = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchContainer>
            <Searchbar
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

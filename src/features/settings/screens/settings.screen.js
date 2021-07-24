import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { List, Avatar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { SafeArea } from './../../../components/utility/safe-area.component';
import Spacer from './../../../components/spacer/spacer.component';
import Text from '../../../components/typography/text.component';

const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
    align-items: center;
`;
const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);

    const [phoroUri, setPhoroUri] = useState(null);

    useFocusEffect(() => {
        (async () => {
            const userPhoto = await AsyncStorage.getItem(`@${user.uid}-photo`);
            setPhoroUri(userPhoto);
        })();
    });

    return (
        <SafeArea>
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                    {!phoroUri && (
                        <Avatar.Icon
                            size={180}
                            icon="human"
                            backgroundColor="#2182BD"
                        />
                    )}
                    {phoroUri && (
                        <Avatar.Image
                            size={180}
                            source={{ uri: phoroUri }}
                            backgroundColor="#2182BD"
                        />
                    )}
                </TouchableOpacity>
                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>

            <List.Section>
                <SettingsItem
                    title="Favourites"
                    description="View your favourites"
                    left={props => (
                        <List.Icon {...props} color="black" icon="heart" />
                    )}
                    onPress={() => navigation.navigate('Favourites')}
                />
                <SettingsItem
                    title="Logout"
                    left={props => (
                        <List.Icon {...props} color="black" icon="door" />
                    )}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    );
};

export default SettingsScreen;

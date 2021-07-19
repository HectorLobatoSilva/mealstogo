import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import { colors } from './../../../infraestructure/theme/colors';
import Text from './../../../components/typography/text.component';

export const AccountBackground = styled.ImageBackground.attrs({
    source: require('./../../../../assets/home_bg.jpeg'),
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
`;

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: ${props => props.theme.space[4]};
    margin-top: ${props => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
    padding: ${props => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
    width: 250px;
`;
export const Title = styled(Text)`
    font-size: 30px;
    color: #fff;
    text-shadow: 2px 2px #000;
`;
export const ErrorContainer = styled.View`
    max-width: 250px;
    align-items: center;
    align-self: center;
    margin-top: ${props => props.theme.space[2]};
    margin-bottom: ${props => props.theme.space[2]};
`;

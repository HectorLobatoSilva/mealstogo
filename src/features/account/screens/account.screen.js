import React from 'react';
import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    Title,
    AnimationWrapper,
} from '../components/account.styles';

import LottieView from 'lottie-react-native';

import Spacer from './../../../components/spacer/spacer.component';

const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
                <LottieView
                    key="Animation"
                    resizeMode="cover"
                    source={require('./../../../../assets/watermelon.json')}
                    autoPlay
                    loop
                />
            </AnimationWrapper>
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}>
                    Login
                </AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="account-plus-outline"
                        mode="contained"
                        onPress={() => navigation.navigate('Register')}>
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};

export default AccountScreen;

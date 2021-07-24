import React, { useRef, useContext } from 'react';
import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const Camera = styled(RNCamera)`
    width: 100%;
    height: 100%;
`;

const CameraScreen = ({ navigation }) => {
    const cameraRef = useRef();

    const { user } = useContext(AuthenticationContext);

    const onSnap = async () => {
        if (cameraRef) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                await AsyncStorage.setItem(`@${user.uid}-photo`, photo.uri);
                navigation.goBack();
            } catch (err) {
                console.error(err);
            }
        }
    };

    if (RNCamera.Constants.CameraStatus === 'PENDING_AUTHORIZATION') {
        return (
            <View>
                <Text>No camera permissionss</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity onPress={onSnap}>
            <Camera
                ref={r => (cameraRef.current = r)}
                type="RNCamera.Constants.Type.front"
            />
        </TouchableOpacity>
    );
};

export default CameraScreen;

import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import { Camera,useCameraDevice} from 'react-native-vision-camera';

import {Box, BoxProps, Icon, PermissionManager} from '@components';
import {useAppSafeArea, useAppState} from '@hooks';
import {AppScreenPros} from '@routes';

const CAMERA_VIEW = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenPros<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlashOn] = useState(false);
  const device = useCameraDevice('back');

  function toggleFlash() {
    setFlashOn(prev => !prev);
  }

  const isFocused = useIsFocused(); // se tiver na tela de camera;
  const appState = useAppState(); //para saber se o app esta aberto e minimizado;
  const isActive = isFocused && appState === 'active';

  return (
    <PermissionManager
      permissionName="camera"
      description="Autorize o Nubble a acessar a câmera">
      <Box flex={1}>
        {device && device !== null && (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive} // se ficar sempre ativo, tem consumo de bateria
          />
        )}

        <Box flex={1} justifyContent="space-between">
          <Box style={{paddingTop: top}} {...$controlAreaTop}>
            <Icon
              size={20}
              color="grayWhite"
              name="arrowLeft"
              onPress={navigation.goBack}
            />
            <Icon
              size={20}
              color="grayWhite"
              name={flashOn ? 'flashOn' : 'flashOff'}
              onPress={toggleFlash}
            />
            <Box width={20} />
          </Box>
          <Box {...$controlAreaBottom}>
            <Icon size={80} color="grayWhite" name="cameraClick" />
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}

const $controlAreaTop: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT - CONTROL_DIFF,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
};
const $controlAreaBottom: BoxProps = {
  backgroundColor: 'black60',
  height: CONTROL_HEIGHT + CONTROL_DIFF,
  alignItems: 'center',
  justifyContent: 'center',
};

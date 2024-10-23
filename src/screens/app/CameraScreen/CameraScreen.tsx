import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import { multiMidiaService } from '@services';
import { Camera,Templates,useCameraDevice, useCameraFormat} from 'react-native-vision-camera';

import {Box, BoxProps, Icon, PermissionManager} from '@components';
import {useAppSafeArea, useAppState} from '@hooks';
import {AppScreenPros} from '@routes';

const CAMERA_VIEW = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenPros<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flashOn, setFlashOn] = useState(false);
  const [isReady,setIsReady] = useState(false);
  //https://react-native-vision-camera.com/docs/guides/devices
  const device = useCameraDevice('back',{
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  //https://react-native-vision-camera.com/docs/guides/devices

  const format = useCameraFormat(device,Templates.Instagram);

  const isFocused = useIsFocused(); // se tiver na tela de camera;
  const appState = useAppState(); //para saber se o app esta aberto e minimizado;
  const isActive = isFocused && appState === 'active';

  const camera = useRef<Camera>(null);

 async function takePhoto() {
   if (camera.current) {
     const photoFile = await camera.current?.takePhoto({
       flash: flashOn ? 'on' : 'off',
       // qualityPriorization:'quality',//na versão que está sendo usada não tem essa opção
     });

    //  console.log({
    //    photoFile,
    //  });

     navigation.navigate('PublishPostScreen', {
       imageUri: multiMidiaService.prepareImageUri(photoFile.path),
      //  imageUri: `file://${photoFile?.path}`,
     });
   }
 }

//  async function takePhoto() {
//   if (camera.current) {
//     const photoFile = await camera.current?.takePhoto({
//       flash: flashOn ? 'on' : 'off',
//       // qualityPrioritization: 'quality',
//     });

//     navigation.navigate('PublishPostScreen', {
//       imageUri: multimediaService.prepareImageUri(photoFile.path),
//     });
//   }
// }

  function toggleFlash() {
    setFlashOn(prev => !prev);
  }



  return (
    <PermissionManager
      permissionName="camera"
      description="Autorize o Nubble a acessar a câmera">
      <Box flex={1}>
        {device && device !== null && (
          <Camera
            ref={camera}
            format={format}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive} // se ficar sempre ativo, tem consumo de bateria
            photo={true} // só funciona se passae essa propriedade
            onInitialized={() => setIsReady(true)} // para saber que a camera está pronta
            // enableHeigQualityPhotos={true}//SEMPRE QUE QUISER TIRA UMA FOTO COM QUALITY SENDO PASSADA TEM QUE PASSAR ESSA PROPRIEDA(CASO CONTRARIO DARÁ ERRO) (IOS)
            //enableHeigQualityPhotos => NÃO ESTÁ DISPONIVEL NA VERSÃO QUE ESTOU USANDO (4.3.2)
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
            {isReady && (
              <Icon
              size={80}
               color="grayWhite"
               name="cameraClick"
               onPress={takePhoto} />
            )}
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

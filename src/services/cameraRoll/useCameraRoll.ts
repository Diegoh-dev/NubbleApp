import {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export function useCameraRoll() {
  const [list, setList] = useState<string[]>([]);
  async function getPhotos() {
    const hasPermission = await hasAndroidPermission();
    if (hasPermission) {
      const photoPage = await CameraRoll.getPhotos({first: 10});

      const listPhotos = photoPage.edges.map(edges => edges.node.image.uri);

      setList(listPhotos);
    } else {
      return [];
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return {
    list,
  };
}

//https://github.com/react-native-cameraroll/react-native-cameraroll?tab=readme-ov-file#getphotos
//SEM ESSA FUNÇÃO NÃO FUNCIONA NO ANDROID, APENAS NO IOS
async function hasAndroidPermission() {
  if (Platform.OS === 'ios') {
    return true;
  }
  const getCheckPermissionPromise = () => {
    if (Number(Platform.Version) >= 33) {
      return Promise.all([
        PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        ),
        PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ),
      ]).then(
        ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
          hasReadMediaImagesPermission && hasReadMediaVideoPermission,
      );
    } else {
      return PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
    }
  };

  const hasPermission = await getCheckPermissionPromise();
  if (hasPermission) {
    return true;
  }
  const getRequestPermissionPromise = () => {
    if (Number(Platform.Version) >= 33) {
      return PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      ]).then(
        statuses =>
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
            PermissionsAndroid.RESULTS.GRANTED,
      );
    } else {
      return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ).then(status => status === PermissionsAndroid.RESULTS.GRANTED);
    }
  };

  return await getRequestPermissionPromise();
}

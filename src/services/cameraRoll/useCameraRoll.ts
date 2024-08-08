import {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

import {QueryKeys} from '@infra';
// import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useInfiniteQuery} from '@tanstack/react-query';

import {cameraRollService} from './cameraRollService';
// import {PhotoListPaginated} from './cameraRollTypes';

export function useCameraRoll(hasPermission: boolean) {
  const [list, setList] = useState<string[]>([]);

  const query = useInfiniteQuery({
    queryKey: [QueryKeys.CameraRollList],
    queryFn: ({pageParam}) => cameraRollService.getPhotos(pageParam),
    //pega o parametro 'cursor' da pagina que foi retornada, e passa ele na queryFn para retornar os dados apertir desse ultimo cursor que foi retornado.
    getNextPageParam: ({cursor}) => cursor,
    enabled: hasPermission,
  });

  //como estava antes de receber a permissão como dependência (Não Apagar)
  // async function getPhotos() {
  //   const hasPermission = await hasAndroidPermission();
  //   if (hasPermission) {
  //     const photoPage = await CameraRoll.getPhotos({first: 10});
  //     console.log('page info:', photoPage.page_info);
  //     const listPhotos = photoPage.edges.map(edges => edges.node.image.uri);

  //     setList(listPhotos);
  //   } else {
  //     return [];
  //   }
  // }

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<string[]>((prev, current) => {
        return [...prev, ...current.photoList];
      }, []);

      setList(newList);
    }
  }, [query.data]);

  return {
    photoList:list,
    hasNextPage:query.hasNextPage,
    fetchNextPage:() => query.fetchNextPage(),
  };
}

//https://github.com/react-native-cameraroll/react-native-cameraroll?tab=readme-ov-file#getphotos
//SEM ESSA FUNÇÃO NÃO FUNCIONA NO ANDROID, APENAS NO IOS
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

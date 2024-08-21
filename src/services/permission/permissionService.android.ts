// FUNÇÃO QUE VERIFICA SE A PERMISSÃO ESTÁ CONCEDIDA OU NÃO

import { Permission, PermissionsAndroid, Platform } from 'react-native';

import {PermissionName, PermissionService, PermissionStatus} from './permissionTypes';

async function check(name:PermissionName):Promise<PermissionStatus> {
    const permission = mapNamePermission(name);
    if (permission){
        const result = await PermissionsAndroid.check(permission);

        if (result){
            return 'granted';
        }

        return 'denied';
    }

    return 'unavailable';
}

// FUNÇÃO QUE VAI SER CHAMADA NA PRIMEIRA VEZ PARA REQUISITAR A PERMISSÃO
async function request(name: PermissionName): Promise<PermissionStatus> {
  const permission = mapNamePermission(name);
  if (permission) {
    const result = await PermissionsAndroid.request(permission);
    return result;
  }

  return 'unavailable';
}


export const permissionService: PermissionService = {
    request,
    check,
};


//função para mapear o nome das permisões

function mapNamePermission(name:PermissionName):Permission | null{
    switch (name) {
        case 'photoLibrary':
            if (Number(Platform.Version) >= 33){
                return 'android.permission.READ_MEDIA_IMAGES';
            } else {
                return 'android.permission.READ_EXTERNAL_STORAGE';
            }
            case 'camera' :
                return 'android.permission.CAMERA';
        default:
          return null;
    }
}

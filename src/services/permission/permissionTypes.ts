//unavailable => quando a funcionalidade não estiver disponivel no dispositivo
//obs: dentro do IOS não temos acesso a camera(para o simulador)
export type PermissionStatus =
  | 'granted'
  | 'denied'
  | 'never_ask_again'
  | 'unavailable';

//GRANTED:'granted'
//DENIED:'denied'
//NEVER_ASK_AGAIN:'never_ask_again'

export type PermissionName = 'photoLibrary' | 'camera';

export type PermissionService = {
  request: (name: PermissionName) => Promise<PermissionStatus>;
  check: (name: PermissionName) => Promise<PermissionStatus>;
};

// export {};
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

  import { initializeStorage } from '../services/storage';
  import { inMemoryStorage } from '../services/storage/implementation/jest/inMemoryStorage';

// usando o mock o jest substitui toda a importação da importação "@react-navigation/native", pelo nosso mock
// para sinalizar para o jest que as outras importações da lib eu quero usar as reais eu uso o "const originalModule = jest.requireActual('@react-navigation/native');"
// e repasso para o mock os modulos originais, apenas o usenavigation irá sobrescrever o do modulo original
// //https://jestjs.io/docs/mock-functions#mocking-partials

//@ts-ignore

//sobrescreve a imprementação do useSafeAreaInsets
jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));


jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});


jest.mock('@react-native-camera-roll/camera-roll', () => ({
  CameraRoll: {
    getPhotos: jest.fn(async () => ({
      edges: [
        {node: {image: {uri: 'image-1'}}},
        {node: {image: {uri: 'image-2'}}},
        {node: {image: {uri: 'image-3'}}},
      ],
    })),
  },
}));

jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
);

jest.mock('../services/permission/permissionService', () => ({
  permissionService: {
    request: jest.fn(),
    check: jest.fn(),
  },
}));

jest.mock('expo-image-manipulator', () => ({
  manipulateAsync: jest.fn(),
}));

initializeStorage(inMemoryStorage);

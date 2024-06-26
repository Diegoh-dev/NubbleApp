export {};
// usando o mock o jest substitui toda a importação da importação "@react-navigation/native", pelo nosso mock
// para sinalizar para o jest que as outras importações da lib eu quero usar as reais eu uso o "const originalModule = jest.requireActual('@react-navigation/native');"
// e repasso para o mock os modulos originais, apenas o usenavigation irá sobrescrever o do modulo original
// //https://jestjs.io/docs/mock-functions#mocking-partials

//@ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

//sobrescreve a imprementação do useSafeAreaInsets
jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets)
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

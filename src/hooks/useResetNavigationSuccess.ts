import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '@routes';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: RootStackParamList['SuccesScreen']) {
    navigation.reset({
      index: 1, // index da tela que queremos resetar.
      routes: [
        {name: 'LoginScreen'}, //0
        {
          name: 'SuccesScreen',
          params,
        }, //1
      ], //telas que serão resetadas e precisam ser resetadas com os parametros que elas recebem.
    });
  }

  return {
    reset,
  };
}

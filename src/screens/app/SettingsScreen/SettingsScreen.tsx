import React from 'react';

import { useAuthSingOut } from '@domain';

import {Button, Screen} from '@components';
import {AppScreenPros} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen({navigation}: AppScreenPros<'SettingsScreen'>) {

  const {SingOut,isLoading} = useAuthSingOut();


  return (
    <Screen canGoBack title="Configurações">
      <Button loading={isLoading} title="Sair da conta" onPress={SingOut} />
    </Screen>
  );
}

{
  /* <Button
        title="New Post"
        onPress={() => {
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          });
        }}
      /> */
}

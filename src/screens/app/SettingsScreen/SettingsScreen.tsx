import React from 'react';

import {Button, Screen, Text} from '@components';
import { AppScreenPros } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen({navigation}: AppScreenPros<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
      <Button title="New Post" onPress={() => {
        navigation.navigate('AppTabNavigator',{
          screen:'NewPostScreen'
        });
      }}/>
    </Screen>
  );
}

import React from 'react';

import { AppScreenPros } from 'src/Routes/types/navigationType';

import {Button, Screen, Text} from '@components';


export function HomeScreen({navigation}: AppScreenPros<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>

      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}

import React from 'react';


import {Button, Screen, Text} from '@components';
import { AppScreenPros } from '@routes';


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

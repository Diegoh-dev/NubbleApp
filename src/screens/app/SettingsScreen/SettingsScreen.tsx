import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/Routes/AppStack';

import {Screen, Text} from '@components';

type SettingsScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'SettingsScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen({navigation}: SettingsScreenProps) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
}

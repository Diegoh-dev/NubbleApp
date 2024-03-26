import React from 'react';

import { AppScreenPros } from 'src/Routes/types/navigationType';

import {Screen, Text} from '@components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen({navigation}: AppScreenPros<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
}

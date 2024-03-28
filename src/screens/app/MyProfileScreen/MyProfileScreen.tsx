import React from 'react';

import {Screen, Text} from '@components';
import { AppTabScreenProps } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MyProfileScreen({navigation}:AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text> My Profile Screen</Text>
    </Screen>
  );
}

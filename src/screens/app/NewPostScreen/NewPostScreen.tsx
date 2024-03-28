import React from 'react';

import {Screen, Text} from '@components';
import { AppTabScreenProps } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function NewPostScreen({navigation}:AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text> My Post Screen</Text>
    </Screen>
  );
}

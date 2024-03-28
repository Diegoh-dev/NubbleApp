import React from 'react';

import {Screen, Text} from '@components';
import { AppTabScreenProps } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FavoriteScreen({navigation}:AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text> My Davorite Screen</Text>
    </Screen>
  );
}

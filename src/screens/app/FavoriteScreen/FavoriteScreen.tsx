import React from 'react';

import {AppTabScreenProps} from '@Routes';

import {Screen, Text} from '@components';

export function FavoriteScreen({
  navigation,
}: AppTabScreenProps<'FavoriteScreen'>) {
  console.log({
    navigation,
  });
  return (
    <Screen>
      <Text> My Davorite Screen</Text>
    </Screen>
  );
}

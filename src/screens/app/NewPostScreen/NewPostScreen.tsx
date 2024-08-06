import React from 'react';
import {Image} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';


export function NewPostScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  const {list} = useCameraRoll();
  console.log({
    list,
  })
  return (
    <Screen scrollable>
      <Text> My Post Screen</Text>
      {list.map(photo => (
        <Image source={{uri: photo}} style={{width: 200, height: 200}} />
      ))}
    </Screen>
  );
}

import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from 'src/Routes/AppStack';

import {Button, Screen, Text} from '@components';

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

export function HomeScreen({navigation}: HomeScreenProps) {
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

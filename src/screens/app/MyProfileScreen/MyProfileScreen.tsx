import React from 'react';

import {useAuthCrendentials} from '@services';

import {Box, Icon, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfileScreen({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) {
  const {authCredentials} = useAuthCrendentials();
  const name = authCredentials?.user.fullName;
  return (
    <Screen>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignContent="center">
        {name && <Text>{name}</Text>}

        <Icon
          name="settings"
          onPress={() => navigation.navigate('SettingsScreen')}
        />
      </Box>
    </Screen>
  );
}

import React from 'react';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenPros} from '@routes';

export function ProfileScreen({route}: AppScreenPros<'ProfileScreen'>) {
  const userId = route.params.userId;
  const {user, loading, error} = useUserGetById(userId);
  return (
    <Screen canGoBack>
      {loading && <ActivityIndicator />}
      {error && <Text> Error ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            imageURL={user.profileUrl}
            borderRadius={24}
            size={64}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.userName}</Text>
        </Box>
      )}
    </Screen>
  );
}

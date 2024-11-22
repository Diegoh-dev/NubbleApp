import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {useUserGetById} from '@domain';
import {AppScreenPros} from '@Routes';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';

export function ProfileScreen({route}: AppScreenPros<'ProfileScreen'>) {
  const userId = route.params.userId;
  const {user, isLoading, isError, isFetching, refetch} =
    useUserGetById(userId);
  //isLoading => aparece quando ainda não tem cache (Na primeira vez).
  // isFetching => aparece a cada vez que um refetch é feito
  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> Error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
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
        </ScrollView>
      )}
    </Screen>
  );
}

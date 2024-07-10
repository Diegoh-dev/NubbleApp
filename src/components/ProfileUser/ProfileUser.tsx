import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { User } from '@domain';
import { useNavigation } from '@react-navigation/native';

import { PressableBox, ProfileAvatar, Text,PressableBoxProps} from '@components';

type ProfileUserProps = {user:Pick<User, 'userName' | 'profileUrl' | 'id'>} & PressableBoxProps;

export function ProfileUser({user,onPress,...pressableBoxProps}: ProfileUserProps) {

  const navigate = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }

    navigate.navigate('ProfileScreen', {
      userId: user.id,
    });
  }

  return (
   <PressableBox flexDirection="row" alignItems="center" mb="s16" onPress={handleOnPress} {...pressableBoxProps}>
      <ProfileAvatar imageURL={user.profileUrl}  />
      <Text ml="s12" preset="paragraphMedium" semiBold>
        {user.userName}
      </Text>
   </PressableBox>
  );
}

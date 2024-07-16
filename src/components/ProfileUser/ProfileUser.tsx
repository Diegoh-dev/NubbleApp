import React, { ReactElement } from 'react';
import { GestureResponderEvent } from 'react-native';

import { User } from '@domain';
import { useNavigation } from '@react-navigation/native';

import { PressableBox, ProfileAvatar, Text,PressableBoxProps, ProfileAvatarProps, Box} from '@components';

type ProfileUserProps = {user:Pick<User, 'userName' | 'profileUrl' | 'id'>;
  avatarProps?:Omit<Partial<ProfileAvatarProps>,'imageURL'>;
  RightComponent?:ReactElement;
} & PressableBoxProps;

export function ProfileUser({user,onPress,avatarProps,RightComponent,...pressableBoxProps}: ProfileUserProps) {

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
    <PressableBox
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s16"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <Box
        flexDirection="row"
        alignItems="center"
        >
        <ProfileAvatar {...avatarProps} imageURL={user.profileUrl} />
        <Text ml="s12" preset="paragraphMedium" semiBold>
          {user.userName}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  );
}

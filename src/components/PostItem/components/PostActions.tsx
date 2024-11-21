import React from 'react';

import {Post} from '@domain';

import {Box, TouchableOpacityBox} from '../../Box/box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

// import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;
export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO: implement like post
  }
  function navigateToComments() {
    //TODO: implement comment post
  }
  function favoritePost() {
    //TODO: implement bookmark post
  }
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        onPress={likePost}
        text={reactionCount}
      />

      <Item
        marked
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        onPress={navigateToComments}
        text={commentCount}
      />

      <Item
        marked={false}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        onPress={favoritePost}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function Item({onPress, icon, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'market' : undefined}
      />
      {text > 0 && (
        <Text preset="headingSmall" ml="s4" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

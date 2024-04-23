import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppScreenPros} from '@routes';


export function PostCommentScreen({route}: AppScreenPros<'PostCommentScreen'>) {
  const postId = route.params.postId;



  const {list} = usePostCommentList(postId);
  console.log('listagem:', list);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <Box>
        <Text>{item.message}</Text>
      </Box>
    );
  }
  return (
    <Screen canGoBack title="Comentários">
      <FlatList
        data={list}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
}

import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Screen} from '@components';
import {AppScreenPros} from '@routes';
import {PostCommentItem} from '@screens'

export function PostCommentScreen({route}: AppScreenPros<'PostCommentScreen'>) {
  const postId = route.params.postId;



  const {list} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem postComment={item}/>
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

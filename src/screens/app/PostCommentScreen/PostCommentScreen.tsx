import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Screen} from '@components';
import { useAppSafeArea } from '@hooks';
import {AppScreenPros} from '@routes';

import {PostCommentBottom, PostCommentItem} from './components';

export function PostCommentScreen({route}: AppScreenPros<'PostCommentScreen'>) {
  const postId = route.params.postId;

  const {list,fetchNextPage,hasNextPage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }
  return (
    <Screen canGoBack title="Comentários">
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom:bottom}}
        ListFooterComponent={<PostCommentBottom hasNextPage={hasNextPage} fetchNextPage={fetchNextPage}/>}
      />
    </Screen>
  );
}

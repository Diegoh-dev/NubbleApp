import React, {useRef} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';
import {AppTabScreenProps} from '@Routes';

import {PostItem, Screen} from '@components';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {
    list: postList,
    isLoading,
    isError,
    refresh,
    fetchNextPage,
  } = usePostList();

  const flatListRef = useRef<FlatList<Post>>(null);

  useScrollToTop(flatListRef); // responsavel para voltar a listagem do começo.

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={post => post.id.toString()}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshing={isLoading}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={isLoading} error={isError} refetch={refresh} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};

import React from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post, usePostList} from '@domain';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {postList, loding, error, refetch,fetchNextPage} = usePostList();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={post => post.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}//FUNÇÃO QUE SERÁ CHAMANDA QUANDO O SCROLL ESTIVER CHEGANDO NO FINAL DA LISTA
        onEndReachedThreshold={0.1}//momento que a requisição acima será quamanda qnd chegar nos ultimos 10% da lista.
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={loding} error={error} refetch={refetch} />
        } // O componente será renderizando toda vez que a lista estiver vazia.
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

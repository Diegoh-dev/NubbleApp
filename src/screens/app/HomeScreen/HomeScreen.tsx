import React, { useRef } from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl, StyleProp, ViewStyle} from 'react-native';

import {Post, usePostList} from '@domain';
import { useScrollToTop } from '@react-navigation/native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {list:postList, isLoading, isError, refresh,fetchNextPage} = usePostList();

  const flatListRef = useRef<FlatList<Post>>(null);

  useScrollToTop(flatListRef);// responsavel para voltar a listagem do começo.

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
        onEndReached={fetchNextPage}//FUNÇÃO QUE SERÁ CHAMANDA QUANDO O SCROLL ESTIVER CHEGANDO NO FINAL DA LISTA
        onEndReachedThreshold={0.1}//momento que a requisição acima será quamanda qnd chegar nos ultimos 10% da lista.
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refresh}/>}// componente responsalvel por fazer o pull to refresh(Puxar o scroll de cima para baixo)
        refreshing={isLoading}//para saber se esta esperando novos dados de uma atualização
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty loading={isLoading} error={isError} refetch={refresh} />
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

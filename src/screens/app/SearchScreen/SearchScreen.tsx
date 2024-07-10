import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';


import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {useDebounce} from '@hooks';
import {AppScreenPros} from '@routes';

import {SearchHistory} from './components/SearchHistory';

export function SearchScreen({}: AppScreenPros<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  const debaounceSearch = useDebounce(search);

  // const {addUser} = useSearchHistoryService();

  const {list} = useUserSearch(debaounceSearch);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} />;
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite sua busca"
          onChangeText={setSearch}
          value={search}
          leftComponent={<Icon color="gray3" name="search" />}
        />
      }>

      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.userName}
        />
      )}
    </Screen>
  );
}

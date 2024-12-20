import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';
import {AppScreenPros} from '@Routes';
import {useSearchHistoryService} from '@services';

import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {useDebounce} from '@hooks';

import {SearchHistory} from './components/SearchHistory';

export function SearchScreen({}: AppScreenPros<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  const debaounceSearch = useDebounce(search);

  const {addUser} = useSearchHistoryService();

  const {list} = useUserSearch(debaounceSearch);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        onPress={() => addUser(item)}
        user={item}
        avatarProps={{size: 48}}
      />
    );
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

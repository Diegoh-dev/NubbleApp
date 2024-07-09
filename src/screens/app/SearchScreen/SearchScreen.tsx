import React, {useState} from 'react';

import { useUserSearch } from '@domain';

import {Icon, Screen, Text, TextInput} from '@components';
import { useDebounce } from '@hooks';
import {AppScreenPros} from '@routes';

export function SearchScreen({}: AppScreenPros<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  const debaounceSearch =  useDebounce(search);

 const {list} = useUserSearch(debaounceSearch);

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
        
      {list.map(user => (
        <Text key={user.id}>{user.userName}</Text>
      ))}
    </Screen>
  );
}

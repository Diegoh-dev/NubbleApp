import React, {useState} from 'react';

import {Icon, Screen, Text, TextInput} from '@components';
import {AppScreenPros} from '@routes';

export function SearchScreen({}: AppScreenPros<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          onChangeText={setSearch}
          value={search}
          leftComponent={<Icon color='gray3' name="search" />}
        />
      }>
      <Text>Search Screen</Text>
    </Screen>
  );
}

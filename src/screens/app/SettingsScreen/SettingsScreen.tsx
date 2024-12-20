import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useAuthSingOut} from '@domain';
import {AppScreenPros} from '@Routes';

import {Button, Screen, Separator} from '@components';

import {MenuItem, MenuItemProps} from './components/MenuItem';

export function SettingsScreen({navigation}: AppScreenPros<'SettingsScreen'>) {
  const {SingOut, isLoading} = useAuthSingOut();

  const items: MenuItemProps[] = [
    {label: 'Termos de uso', onPress: () => {}},
    {label: 'Política de privacidade', onPress: () => {}},
    {
      label: 'Modo escuro',
      onPress: () => navigation.navigate('DarkModeScreen'),
    },
  ];

  function renderItem({item}: ListRenderItemInfo<MenuItemProps>) {
    return <MenuItem {...item} />;
  }

  return (
    <Screen canGoBack title="Configurações" flex={1}>
      <FlatList
        data={items}
        bounces={false} //efeito de bounces (só existe no IOS)
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={
          <Button
            mt="s48"
            loading={isLoading}
            title="Sair da conta"
            onPress={SingOut}
          />
        }
      />
    </Screen>
  );
}

{
  /* <Button
        title="New Post"
        onPress={() => {
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          });
        }}
      /> */
}

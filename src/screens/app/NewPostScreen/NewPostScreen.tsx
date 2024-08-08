import React from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = SCREEN_WIDTH / NUM_COLUMNS;

export function NewPostScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  const {photoList,fetchNextPage} = useCameraRoll(true);
  console.log({
    photoList,
  });

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Image
        source={{uri: item}}
        style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
      />
    );
  }
  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      {/* numColumns: numero de colunas */}
      <FlatList
        numColumns={NUM_COLUMNS}
        data={photoList}
        renderItem={renderItem}
        //onEndReached => função que vai ser chamada quando chegar em (onEndReachedThreshold = 0.1)10% final da lista(Carregar a proxima pagina de fotos)
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={
          <Header imagewidth={SCREEN_WIDTH} imageUri={photoList[0]} />
        }
      />
    </Screen>
  );
}

import React, { useRef, useState } from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo, Pressable} from 'react-native';

import {useCameraRoll, usePermission} from '@services';

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
  const [selectedImage,setSelectedImage] = useState('');
  const permission = usePermission('photoLibrary');
  const flatLisRef = useRef<FlatList>(null);
  const {photoList,fetchNextPage} = useCameraRoll(permission.status === 'granted',setSelectedImage);
  // console.log({
  //   photoList,
  // });


  function onSelectImage(imageUri:string){
    setSelectedImage(imageUri);
    //FAZER O SCROLL PARA O TOPO QUANDO CLICAR NA IMAGEM
    flatLisRef.current?.scrollToOffset({offset:0,animated:true});
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => onSelectImage(item)}>
        <Image
          source={{uri: item}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
      </Pressable>
    );
  }
  return (
    <Screen canGoBack title="Novo post" noPaddingHorizontal>
      {/* numColumns: numero de colunas */}
      <FlatList
      ref={flatLisRef}
        numColumns={NUM_COLUMNS}
        data={photoList}
        renderItem={renderItem}
        //onEndReached => função que vai ser chamada quando chegar em (onEndReachedThreshold = 0.1)10% final da lista(Carregar a proxima pagina de fotos)
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={
          <Header imagewidth={SCREEN_WIDTH} imageUri={selectedImage} />
        }
      />
    </Screen>
  );
}

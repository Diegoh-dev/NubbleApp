import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import { images } from '@assets';
import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Button, Icon, Text} from '@components';

interface Props {
  imageUri: string;
  imagewidth: number;
}

export function Header({imageUri, imagewidth}: Props) {
  const navigation = useNavigation();

  function navigateToPublishPost() {
    if (imageUri) {
      navigation.navigate('PublishPostScreen', {imageUri});
    }
  }

  function navigateToCamera(){
      navigation.navigate('CameraScreen');
  }

  return (
    <Box>
      <ImageBackground
        source={imageUri ? {uri: imageUri} : images.imagePlaceholder}
        style={[
          {
            width: imagewidth,
            height: imagewidth,
          },
          styles.imageBackground,
        ]}>
        {!!imageUri && (
          <Button
            onPress={navigateToPublishPost}
            preset="ghost"
            title="Escolher essa"
            mb="s24"
          />
        )}
      </ImageBackground>
      <Box {...$styleOptions}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" onPress={navigateToCamera}/>
      </Box>
    </Box>
  );
}

const $styleOptions: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's16',
  paddingVertical: 's16',
};

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

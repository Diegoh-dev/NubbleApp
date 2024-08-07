import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

const ICON_SIZE = 20;
type props = Pick<ScreenProps, 'canGoBack' | 'title' | 'HeaderComponent'> & BoxProps;

export function ScrrenHeader({canGoBack, title,HeaderComponent,...boxProps}: props) {
  const navigation = useNavigation();

  if (!title && !canGoBack && !HeaderComponent) {
    return null;
  }
  
  const showBackLabel = !title && !HeaderComponent;
  return (
    <Box flexDirection="row" justifyContent="space-between" mb="s24" alignItems="center" {...boxProps}>
      {canGoBack && (
        <TouchableOpacityBox
          testID="screen-back-button"
          onPress={navigation.goBack}
          flexDirection="row"
          mr="s10"
          alignItems="center">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />

          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold marginLeft="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {/* hack para o alinhamento do titulo da tela. */}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}

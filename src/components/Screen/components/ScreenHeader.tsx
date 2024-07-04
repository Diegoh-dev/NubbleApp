import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

const ICON_SIZE = 20;
type props = Pick<ScreenProps, 'canGoBack' | 'title' | 'HeaderComponent'>;

export function ScrrenHeader({canGoBack, title,HeaderComponent}: props) {
  const navigation = useNavigation();
  const showBackLabel = !title && !HeaderComponent;
  return (
    <Box flexDirection="row" justifyContent="space-between" mb="s24">
      {canGoBack && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          flexDirection="row"
          mr='s10'
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

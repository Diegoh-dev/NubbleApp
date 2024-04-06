import React, {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {Box,BoxProps,Icon,Text,TouchableOpacityBox} from '@components';
import {useAppSafeArea,useAppTheme} from '@hooks';


import {ScrollViewContainer, ViewContainer} from './components/ScrrenContainer';

interface ScreenProps extends BoxProps{
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  // console.log({
  //   device: Platform.OS,
  //   bottom,
  // });
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const {colors} = useAppTheme();
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
    style={{flex:1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom},style]}
           {...boxProps}>
          {canGoBack && (
            <TouchableOpacityBox onPress={navigation.goBack} mb="s24" flexDirection="row">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold marginLeft="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

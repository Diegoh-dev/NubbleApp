import React, {ReactNode} from 'react';
import {Box,Icon,Text,TouchableOpacityBox} from '@components';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useAppSafeArea,useAppTheme} from '@hooks';
import { useNavigation } from '@react-navigation/native';
import {ScrollViewContainer, ViewContainer} from './components/ScrrenContainer';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
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
          style={{paddingTop: top, paddingBottom: bottom}}>
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

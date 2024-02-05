import React, {ReactNode} from 'react';
import {Box, TouchableOpacityBox} from '../Box/box';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {ScrollViewContainer, ViewContainer} from './components/ScrrenContainer';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useNavigation } from '@react-navigation/native';

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
  console.log({
    device: Platform.OS,
    bottom,
  });
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

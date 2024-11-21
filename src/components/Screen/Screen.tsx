import React, {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

// import {Box, BoxProps} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/box';

import {ScrollViewContainer, ViewContainer, ScrrenHeader} from './components';

export interface ScreenProps extends BoxProps {
  children: ReactNode;
  HeaderComponent?: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
  noPaddingHorizontal?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  title,
  style,
  HeaderComponent,
  noPaddingHorizontal = false,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  // console.log({
  //   device: Platform.OS,
  //   bottom,
  // });
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const {colors} = useAppTheme();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          <ScrrenHeader
            paddingHorizontal={noPaddingHorizontal ? 's24' : undefined}
            HeaderComponent={HeaderComponent}
            canGoBack={canGoBack}
            title={title}
          />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

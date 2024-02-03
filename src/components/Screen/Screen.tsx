import React, {ReactNode} from 'react';
import {Box} from '../Box/box';
import {Platform} from 'react-native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

interface ScreenProps {
  children: ReactNode;
  canGoBack?:boolean;
}

export function Screen({children,canGoBack = false}: ScreenProps) {
  const {top} = useAppSafeArea();
  console.log({
    device: Platform.OS,
    top,
  });
  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {canGoBack && <Box mb='s24' flexDirection='row'>
      <Icon name='arrowLeft' color='primary'/>
      <Text preset='paragraphMedium' semiBold marginLeft='s8'>Voltar</Text>
      </Box>}
      {children}
    </Box>
  );
}

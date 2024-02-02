import React, {ReactNode} from 'react';
import {Box} from '../Box/box';
import {Platform} from 'react-native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';

interface ScreenProps {
  children: ReactNode;
}

export function Screen({children}: ScreenProps) {
  const {top} = useAppSafeArea();
  console.log({
    device: Platform.OS,
    top,
  });
  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {children}
    </Box>
  );
}

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions} from 'react-native';

import {Toast, ToastPosition, ToastType} from '@services';

import {$shadowProps} from '@theme';

import { Box, BoxProps } from '../../Box/box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';



const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({toast}: Props) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast.type || 'success';

  return (
    <Box {...$boxStyles} style={[{[position]: 100}, $shadowProps]}>
      <Icon {...maoTypeToIcon[type]} />
      <Text style={{flexShrink: 1}} preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

const maoTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    name: 'checkRound',
    color: 'success',
  },
  error: {
    name: 'errorRound',
    color: 'error',
  },
};

const $boxStyles: BoxProps = {
  position: 'absolute',
  alignSelf: 'center',
  backgroundColor: 'background',
  padding: 's16',
  borderRadius: 's16',
  alignItems: 'center',
  flexDirection: 'row',
  gap: 's16',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};

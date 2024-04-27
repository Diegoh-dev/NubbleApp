import React, { useEffect } from 'react';
import {Dimensions} from 'react-native';

import {useToast} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const {toast,hiddenToast} = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hiddenToast();
      }, 2000);
    }
  }, [toast,hiddenToast]);

  if (!toast) {
    return null;
  }
  return (
    <Box top={100} {...$boxStyles}>
      <Icon color="success" name="checkRound" />
      <Text style={{flexShrink: 1}} preset="paragraphMedium" bold>
        {toast.message}
      </Text>
    </Box>
  );
}

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
  style: {...$shadowProps},
};

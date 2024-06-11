import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColor} from '@theme';

//Oculta a propriedade color do ActivityIndicatorProps
interface props extends Omit<ActivityIndicatorProps, 'color'> {
  color?: ThemeColor;
}
export function ActivityIndicator({color = 'primary', ...rest}: props) {
  const {colors} = useAppTheme();
  return (
    <RNActivityIndicator
      testID="activity-indicator"
      color={colors[color]}
      {...rest}
    />
  );
}

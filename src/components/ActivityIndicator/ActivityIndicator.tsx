import React from 'react';
import {ActivityIndicatorProps, ActivityIndicator as RNActivityIndicator} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColor} from '@theme';

                        //Oculta a propriedade color do ActivityIndicatorProps
interface props extends Omit<ActivityIndicatorProps,'color'> {
    color:ThemeColor;
}
export function ActivityIndicator({color}:props){
    const {colors} = useAppTheme();
    return <RNActivityIndicator color={colors[color]} />;
}

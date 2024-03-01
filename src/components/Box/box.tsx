import {
    createBox,
    createRestyleComponent,
    backgroundColor,
    BackgroundColorProps,
    spacing,
    SpacingProps,
    layout,
    LayoutProps,
    border,
    BorderProps,
    spacingShorthand,
    SpacingShorthandProps
} from '@shopify/restyle';
import { Theme } from '@theme';
import {TouchableOpacity,TouchableOpacityProps} from 'react-native'
import React from 'react';

export const Box = createBox<Theme>();
// Extraindo a propriedades de tipo de um componente 

export type BoxProps = React.ComponentProps<typeof Box>;


export type TouchableOpacityBoxPros = BackgroundColorProps<Theme> & SpacingProps<Theme> & LayoutProps<Theme> & BorderProps<Theme> & SpacingShorthandProps<Theme> & TouchableOpacityProps

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxPros,Theme>([
  backgroundColor,
  spacing,
  layout,
  border,
  spacingShorthand,
],TouchableOpacity);
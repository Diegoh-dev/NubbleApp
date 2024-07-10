import React from 'react';
import {TouchableOpacity,TouchableOpacityProps,PressableProps} from 'react-native';

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
    SpacingShorthandProps,
} from '@shopify/restyle';

import { Theme } from '@theme';

export const Box = createBox<Theme>();
// Extraindo a propriedades de tipo de um componente

export type BoxProps = React.ComponentProps<typeof Box>;

type RestyleTypes = BackgroundColorProps<Theme> & SpacingProps<Theme> & LayoutProps<Theme> & BorderProps<Theme> & SpacingShorthandProps<Theme>;


export type TouchableOpacityBoxPros = TouchableOpacityProps & RestyleTypes;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxPros,Theme>([
  backgroundColor,
  spacing,
  layout,
  border,
  spacingShorthand,
],TouchableOpacity);

export type PressableBoxProps = PressableProps & RestyleTypes;

export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, layout, border, spacingShorthand],
  TouchableOpacity,
);

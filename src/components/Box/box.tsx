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
import { Theme } from '../../theme/theme';
import {TouchableOpacity,TouchableOpacityProps} from 'react-native'

export const Box = createBox<Theme>();

export type TouchableOpacityBoxPros = BackgroundColorProps<Theme> & SpacingProps<Theme> & LayoutProps<Theme> & BorderProps<Theme> & SpacingShorthandProps<Theme> & TouchableOpacityProps

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxPros,Theme>([
  backgroundColor,
  spacing,
  layout,
  border,
  spacingShorthand,
],TouchableOpacity);
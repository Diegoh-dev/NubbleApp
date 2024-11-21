import {ViewStyle} from 'react-native';

import {createTheme} from '@shopify/restyle';

import {colors} from './colors';

export const theme = createTheme({
  colors: colors.lighTheme,
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },

  //PARA CORRIGIR O ERRO DO COMPOENTE DE TEXTO, POIS ELE RECEBE ALGUMAS PROPRIEDADES COMODEFAULTS

  textVariants: {
    defaults: {},
  },
});

export const darkTheme = createTheme({
  ...theme,
  colors: colors.darkTheme,
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: {width: 0, height: -3},
};

// Extraindo o tipo do objeto theme
export type Theme = typeof theme;
// Extraindo as chaves da propriedade "colors".
export type ThemeColor = keyof Theme['colors'];

// const teste:ThemeColor = 'background'

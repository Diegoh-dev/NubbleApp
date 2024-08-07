import { ViewStyle } from 'react-native';

import {createTheme} from '@shopify/restyle';


export const palette = {
  greenPrimary: '#074C4E',
  greenPrimaryLight: '#EAF6F6',
  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',
  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  grayBlack: '#000000',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
  white70: 'rgba(255,255,255,0.7)',
};

export const theme = createTheme({
  colors: {
    ...palette,
    //valores semânticos
    primary: palette.greenPrimary,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.greenPrimary,

    background: palette.grayWhite,
    backgroundContrast: palette.grayBlack,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.greenSuccess,
    successLight: palette.greenSuccessLight,

    market:palette.carrotSecondary,
  },
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

export const $shadowProps: ViewStyle = {
  elevation:10,
  shadowColor:'#000',
  shadowOpacity:0.05,
  shadowRadius:12,
 shadowOffset:{width:0,height:-3},
 };
 
// Extraindo o tipo do objeto theme
export type Theme = typeof theme;
// Extraindo as chaves da propriedade "colors".
export type ThemeColor = keyof Theme['colors'];

// const teste:ThemeColor = 'background'

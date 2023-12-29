import React from 'react';
import {Text as RNText, TextProps as RnTextProps, TextStyle} from 'react-native';

interface TextProps extends RnTextProps{
  preset?:TextVariants;
}


export function Text({children,preset='headingMedium',style, ...rest}: TextProps) {

  const stylesText = $fontSizes[preset];
  return <RNText  style={[style,stylesText]} {...rest}>{children}</RNText>;
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

  //$ é um padrão usados para identificas variaveis de estilo.

                          //Chave      valor
const $fontSizes : Record<TextVariants,TextStyle> = {
    headingLarge: {fontSize: 32, lineHeight: 38.4},
    headingMedium: {fontSize: 22, lineHeight: 26.4},
    headingSmall: {fontSize: 18, lineHeight: 23.4},
  
    paragraphLarge: {fontSize: 18, lineHeight: 25.2},
    paragraphMedium: {fontSize: 16, lineHeight: 22.4},
    paragraphSmall: {fontSize: 14, lineHeight: 19.6},
  
    paragraphCaption: {fontSize: 12, lineHeight: 16.8},
    paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
}
import React from 'react';

// import {
//   Text,
//   TouchableOpacityBox,
//   TouchableOpacityBoxPros,
//   ActivityIndicator,
// } from '@components';

import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {TouchableOpacityBox, TouchableOpacityBoxPros} from '../Box/box';
import {Text} from '../Text/Text';

import {buttonPresets} from './buttonPresets';

// SEMPRE SEPARAR A PARTE DE COMPORTAMENTO DA PARTE DE UI
// COMPORTAMENTO X UI
//PRESET: PRIMARY E OUTILINE
//DEFAUL, DISABLED

export type ButtonsPreset = 'primary' | 'outline' | 'ghost';

export interface ButtonProps extends TouchableOpacityBoxPros {
  title: string;
  loading?: boolean;
  preset?: ButtonsPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  disabled,
  preset = 'primary',
  ...touchableOpacityBoxPros
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxPros}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content.color} />
      ) : (
        <Text
          color={buttonPreset.content.color}
          {...buttonPreset.content.textProps}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

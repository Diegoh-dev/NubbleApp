import { TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme, ThemeColor} from '../../theme/theme';
import {Box, TouchableOpacityBox, TouchableOpacityBoxPros} from '../Box/box';
import { buttonPresets } from './buttonPresets';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';

// SEMPRE SEPARAR A PARTE DE COMPORTAMENTO DA PARTE DE UI
// COMPORTAMENTO X UI
//PRESET: PRIMARY E OUTILINE
//DEFAUL, DISABLED

export type ButtonsPreset = 'primary' | 'outline' ;


interface ButtonProps extends TouchableOpacityBoxPros {
  title: string;
  loading?: boolean;
  preset?:ButtonsPreset;
  disabled?:boolean;
}

export function Button({title, loading,disabled,preset = 'primary',...touchableOpacityBoxPros}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
     disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxPros}
      >
      {loading ? (
        <ActivityIndicator  color='carrotSecondary'/>
      ) : (
        <Text color={buttonPreset.content}>{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}

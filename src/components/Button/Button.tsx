import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme, ThemeColor} from '../../theme/theme';
import {Box, TouchableOpacityBox, TouchableOpacityBoxPros} from '../Box/box';
import { buttonPresets } from './buttonPresets';

// SEMPRE SEPARAR A PARTE DE COMPORTAMENTO DA PARTE DE UI
// COMPORTAMENTO X UI
//PRESET: PRIMARY E OUTILINE
//DEFAUL, DISABLED

export type ButtonsPreset = 'primary' | 'outline' | 'Secundary';


interface ButtonProps extends TouchableOpacityBoxPros {
  title: string;
  loading?: boolean;
  preset?:ButtonsPreset
}

export function Button({title, loading,preset = 'primary',...touchableOpacityBoxPros}: ButtonProps) {
  const buttonPreset = buttonPresets[preset];
  return (
    <TouchableOpacityBox
      // backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxPros}
      >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text color={buttonPreset.content}>{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}

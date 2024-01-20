import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {Box, TouchableOpacityBox, TouchableOpacityBoxPros} from '../Box/box';

interface ButtonProps extends TouchableOpacityBoxPros {
  title: string;
  loading?: boolean;
}
export function Button({title, loading,...touchableOpacityBoxPros}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxPros}
      >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{color: '#FFF'}}>{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}

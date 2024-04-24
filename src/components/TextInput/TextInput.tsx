import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box,BoxProps} from '../Box/box';
import {$fontFamily,$fontSizes,Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?:string;
  rightComponent?:React.ReactElement;
  boxProps?:BoxProps;
}

export function TextInput({label,errorMessage,rightComponent,boxProps, ...rnTextInputProps}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);


  const $textInputContainer: BoxProps = {
    flexDirection:'row',
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
  };


  function focusInput() {
    inputRef.current?.focus();
  }
  return (
      <Box {...boxProps}>
    <Pressable onPress={focusInput}>
        <Text mb="s4" preset="paragraphSmall">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInputProps}
          />

          {rightComponent && (
            <Box ml="s16" justifyContent="center">
              {rightComponent}
            </Box>
          )}

        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" color="error" bold>
            {errorMessage}
          </Text>
        )}
    </Pressable>
      </Box>
  );
}

export const $textInputStyle: TextStyle = {
  fontFamily: $fontFamily.regular,
  padding: 0,
  ...$fontSizes.paragraphMedium,
  flexGrow:1,
  flexShrink:1,
};


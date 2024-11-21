import React, {useState} from 'react';

import {Icon} from '../Icon/Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

// import {TextInput,TextInputProps,Icon} from '@components';

export type PassWordInputProps = Omit<TextInputProps, 'rightComponent'>;
export function PassWordInput(props: PassWordInputProps) {
  const [isSecureTextInput, setIsSecureTextInput] = useState(true);

  function toggleSecureTextInput() {
    setIsSecureTextInput(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecureTextInput}
      {...props}
      rightComponent={
        <Icon
          onPress={toggleSecureTextInput}
          color="gray2"
          name={isSecureTextInput ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
}

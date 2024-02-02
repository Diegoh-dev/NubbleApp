import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';

export function SignUpScreen() {
  function submitForm() {
    // TODO: Implementar
  }
  return (
    <Screen>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />

      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        rightComponent={<Icon color="gray2" name="eyeOn" />}
        boxProps={{mb: 's48'}}
      />
      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  );
}

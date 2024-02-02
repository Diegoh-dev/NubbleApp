import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar{' '}
      </Text>

      <TextInput
        boxProps={{mb: 's20'}}
        errorMessage="Mensagem de error"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />

      <TextInput
        boxProps={{mb: 's10'}}
        label="Senha"
        placeholder="Digite sua senha"
        rightComponent={<Icon name="eyeOn" color="gray2" />}
      />

      <Text marginBottom="s8" color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>

      <Button mt="s48" title="Entrar" />
      <Button preset="outline" mt="s12" title="Criar uma conta" />
    </Screen>
  );
}

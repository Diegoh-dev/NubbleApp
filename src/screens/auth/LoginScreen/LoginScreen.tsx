import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPassWordInput,
} from '@components';
import {RootStackParamList} from '@routes';

import {loginScreenShema, loginScreenShemaType} from './loginScreenShema';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export function LoginScreen({navigation}: LoginScreenProps) {
  const {control, formState, handleSubmit} = useForm<loginScreenShemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(loginScreenShema),
  });

  function navigationToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigationToForgotPassawordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function submitForm({email, password}: loginScreenShemaType) {
    Alert.alert(`Email:${email} ${'\n'} Senha:${password}`);
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar{' '}
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPassWordInput
        control={control}
        name="password"
        boxProps={{mb: 's10'}}
        label="Senha"
        // secureTextEntry
        placeholder="Digite sua senha"
      />

      <Text
        onPress={navigationToForgotPassawordScreen}
        marginBottom="s8"
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Entrar"
      />
      <Button
        onPress={navigationToSignUpScreen}
        preset="outline"
        mt="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}

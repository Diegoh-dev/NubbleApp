import React from 'react';
// import {Alert} from 'react-native';

import { useAuthSingIn } from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import { useToastService } from '@services';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPassWordInput,
} from '@components';
import { AuthScreenProps } from '@routes';


import {loginScreenShema, loginScreenShemaType} from './loginScreenShema';




export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
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

  const {showToast} = useToastService();

  const {SignIn,isLoading}  = useAuthSingIn({
    onError: (message) => showToast({message,type:'error'}),
  });

  function submitForm({email, password}: loginScreenShemaType) {
    // Alert.alert(`Email:${email} ${'\n'} Senha:${password}`);
    SignIn({email,password});
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
        loading={isLoading}
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

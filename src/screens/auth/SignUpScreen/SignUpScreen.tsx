import React from 'react';

import {useAuthIsUsernameIsVailable, useAuthSingUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPassWordInput,
  ActivityIndicator,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {SignUpShematype, signUpShema} from './signUpShema';

const resetParam: AuthStackParamList['SuccesScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

const defaultValues: SignUpShematype = {
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpShematype>({
      defaultValues,
      mode: 'onChange',
      resolver: zodResolver(signUpShema),
    });

  const {signUp, isLoading} = useAuthSingUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });

  const username = watch('userName');
  const usernameState = getFieldState('userName');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;

  const userNameQuery = useAuthIsUsernameIsVailable({
    username,
    enabled: usernameIsValid,
  });

  function submitForm(formValues: SignUpShematype) {
    signUp(formValues);
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="userName"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
        errorMessage={
          userNameQuery.isUnavailable ? 'username indisponível' : undefined
        }
        rightComponent={
          userNameQuery.isFetching ? <ActivityIndicator /> : undefined
        }
      />

      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's20'}}
      />

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
        placeholder="Digite sua senha"
      />

      <Button
        loading={isLoading}
        disabled={!formState.isValid || userNameQuery.isFetching || userNameQuery.isUnavailable}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}

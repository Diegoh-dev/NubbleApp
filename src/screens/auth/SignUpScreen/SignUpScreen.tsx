import React from 'react';

import {useAuthSingUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {AuthScreenProps, AuthStackParamList} from '@Routes';
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

import {SignUpShematype, signUpShema} from './signUpShema';
import {useAsyncValidation} from './useAsyncValidation';

const resetParam: AuthStackParamList['SuccesScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

const defaultValues: SignUpShematype = {
  username: '',
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

  // const username = watch('userName');
  // const usernameState = getFieldState('userName');
  // const usernameIsValid = !usernameState.invalid && usernameState.isDirty;

  // const userNameQuery = useAuthIsUsernameIsVailable({
  //   username,
  //   enabled: usernameIsValid,
  // });

  const {emailValidate, usernameValidation} = useAsyncValidation({
    watch,
    getFieldState,
  });

  function submitForm(formValues: SignUpShematype) {
    signUp(formValues);
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
        errorMessage={usernameValidation.errorMessage}
        rightComponent={
          usernameValidation.isFetching ? <ActivityIndicator /> : undefined
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
        errorMessage={emailValidate.errorMessage}
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
        rightComponent={
          emailValidate.isFetching ? <ActivityIndicator /> : undefined
        }
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
        disabled={
          !formState.isValid ||
          usernameValidation.notReady ||
          emailValidate.notReady
        }
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}

import React from 'react';

import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {AuthScreenProps, AuthStackParamList} from '@Routes';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Screen, Text, Button, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';

import {
  forgotPasswordScreenShema,
  forgotPasswordScreenShemaType,
} from './forgotPasswordScreenShema';

const resetParam: AuthStackParamList['SuccesScreen'] = {
  title: `Enviamos as instruções${'\n'}para seu e-mail`,
  description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
  icon: {
    name: 'MessageRound',
    color: 'iconColor',
    fillColor: 'iconFillColor',
  },
};

export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  console.log({
    navigation,
  });
  const {control, handleSubmit, formState} =
    useForm<forgotPasswordScreenShemaType>({
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
      resolver: zodResolver(forgotPasswordScreenShema),
    });

  const {showToast} = useToastService();

  const {reset} = useResetNavigationSuccess();
  const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
    onSuccess: () => {
      reset(resetParam);
    },
    onError: message =>
      showToast({
        message,
        type: 'error',
      }),
  });

  function submitForm(values: forgotPasswordScreenShemaType) {
    requestNewPassword(values.email);
    // reset(resetParam);
  }
  return (
    <Screen canGoBack>
      <Text mb="s16" preset="headingLarge">
        Esqueci minha senha
      </Text>
      <Text mb="s32" preset="paragraphLarge">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />

      <Button
        loading={isLoading}
        onPress={handleSubmit(submitForm)}
        mt="s40"
        title="Recuperar senha"
        disabled={!formState.isValid}
      />
    </Screen>
  );
}

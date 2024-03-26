import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {Screen,Text,Button,FormTextInput} from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps } from '@routes';

import { forgotPasswordScreenShema, forgotPasswordScreenShemaType } from './forgotPasswordScreenShema';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({ navigation }: AuthScreenProps<'ForgotPasswordScreen'>) {

  const { control, handleSubmit, formState } = useForm<forgotPasswordScreenShemaType>({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
    resolver: zodResolver(forgotPasswordScreenShema),
  });

  const { reset } = useResetNavigationSuccess();

  function submitForm(values:forgotPasswordScreenShemaType) {
    console.log(values.email);
    reset({
      title: `Enviamos as instruções${'\n'}para seu e-mail`,
      description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'MessageRound',
        color: 'primary',
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text mb="s16" preset="headingLarge">Esqueci minha senha</Text>
      <Text mb="s32" preset="paragraphLarge">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>


      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />

      <Button onPress={handleSubmit(submitForm)} mt="s40" title="Recuperar senha" disabled={!formState.isValid}/>

    </Screen>
  );
}

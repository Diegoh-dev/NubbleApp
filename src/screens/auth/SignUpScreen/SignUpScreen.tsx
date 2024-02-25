import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { useForm, Controller } from 'react-hook-form';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPassWordInput } from '../../../components/Form/FormPassWordInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpShematype, signUpShema } from './signUpShema';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;


export function SignUpScreen({ navigation }: SignUpScreenProps) {

  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<SignUpShematype>({
    defaultValues: {
      userName: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpShema)
  });

  function submitForm(formValues: SignUpShematype) {

    console.log({
      formValues
    })
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   }
    // })
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name='userName'
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name='fullName'
        autoCapitalize='words'
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name='email'
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPassWordInput
        control={control}
        name='password'
        boxProps={{ mb: 's10' }}
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Button disabled={!formState.isValid} onPress={handleSubmit(submitForm)} title="Criar uma conta" />
    </Screen>
  );
}


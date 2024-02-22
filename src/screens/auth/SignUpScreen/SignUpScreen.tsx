import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Icon } from '../../../components/Icon/Icon';
import { Button } from '../../../components/Button/Button';
import { PassWordInput } from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { useForm, Controller } from 'react-hook-form';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPassWordInput } from '../../../components/Form/FormPassWordInput';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;
type SignUpFormType = {
  userName: string;
  fullName: string;
  email: string;
  password: string;
}

export function SignUpScreen({ navigation }: SignUpScreenProps) {

  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<SignUpFormType>({
    defaultValues: {
      userName: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange'
  });

  function submitForm(formValues: SignUpFormType) {

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
        rules={{
          required: 'Username obrigatório'
        }}
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name='fullName'
        rules={{
          required: 'Nome obrigatório'
        }}
        autoCapitalize='words'
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name='email'
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPassWordInput
        control={control}
        name='password'
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres'
          }
        }}
        boxProps={{ mb: 's10' }}
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Button disabled={!formState.isValid} onPress={handleSubmit(submitForm)} title="Criar uma conta" />
    </Screen>
  );
}


import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';

type ForgotPasswordScreenProps = NativeStackScreenProps<RootStackParamList,'ForgotPasswordScreen'>;

export function ForgotPasswordScreen({navigation}:ForgotPasswordScreenProps) {

  const {reset} = useResetNavigationSuccess();

  function submitForm(){
    reset({
      title:`Enviamos as instruções${'\n'}para seu e-mail`,
      description:'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon:{
        name:'MessageRound',
        color:'primary'
      }
    })
  }
  return (
    <Screen canGoBack>
      <Text mb='s16' preset='headingLarge'>Esqueci minha senha</Text>
      <Text mb='s32' preset='paragraphLarge'>Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>

      <TextInput label='E-mail' placeholder='Digite seu e-mail'/>

      <Button onPress={submitForm} mt='s40' title='Recuperar senha'/>

    </Screen>
  );
}

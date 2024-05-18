import {useAuthIsEmailIsVailable, useAuthIsUsernameIsVailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpShematype} from './signUpShema';

type Props = {
  watch: UseFormWatch<SignUpShematype>;
  getFieldState: UseFormGetFieldState<SignUpShematype>;
};

type ReturnValue = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};

// TÉCNICA PARA ISOLAR A LÓGICA DOS CAMPOS (UM POUCO DO PADRÃO MVVM)
export function useAsyncValidation({watch, getFieldState}: Props): {
  usernameValidation: ReturnValue;
  emailValidate: ReturnValue;
} {
  const username = watch('userName');
  const usernameState = getFieldState('userName');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;

  const userNameQuery = useAuthIsUsernameIsVailable({
    username,
    enabled: usernameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = !emailState.invalid && emailState.isDirty;

  const emailQuery = useAuthIsEmailIsVailable({
    email,
    enabled: emailIsValid,
  });

  return {
    usernameValidation: {
      errorMessage: userNameQuery.isUnavailable
        ? 'username indisponível'
        : undefined,
        notReady: userNameQuery.isFetching || userNameQuery.isUnavailable,
        isFetching: userNameQuery.isFetching,
    },

    emailValidate: {
      errorMessage: emailQuery.isUnavailable ? 'e-mail indisponível' : undefined,
      notReady: emailQuery.isFetching || emailQuery.isUnavailable,
      isFetching: emailQuery.isFetching,
    },
  };
}

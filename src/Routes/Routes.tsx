import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {IconProps} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined; // Significa que essa tela não recebe nenhum parametro
  //SucessScreen: icon, title, description
  SuccesScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};


export function Router() {
  const isSignedIn = false;
  return (
    <NavigationContainer>
      {isSignedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';
import {
  ForgotPasswordScreen,
  LoginScreen,
  SignUpScreen,
  SuccesScreen,
} from '@screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined; // Significa que essa tela não recebe nenhum parametro
  //SucessScreen: icon, title, description
  SuccesScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color' | 'fillColor'>;
  };
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true, // para aumentar a area arastavel dos dipositivos IOS
      }}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SuccesScreen" component={SuccesScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}

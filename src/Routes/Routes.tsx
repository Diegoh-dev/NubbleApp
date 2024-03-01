import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen,SignUpScreen,SuccesScreen,ForgotPasswordScreen} from '@screens';
import {IconProps} from '@components';

export type RootStackParamList = {
  LoginScreen : undefined;
  SignUpScreen: undefined; // Significa que essa tela não recebe nenhum parametro
  //SucessScreen: icon, title, description
  SuccesScreen:{
    title:string;
    description:string;
    icon:Pick<IconProps,'name' | 'color'>;
  };
  ForgotPasswordScreen:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled:true // para aumentar a area arastavel dos dipositivos IOS
        }}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccesScreen" component={SuccesScreen} />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

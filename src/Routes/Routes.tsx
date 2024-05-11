import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCrendentials} from '@services';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export function Router() {
  // const isSignedIn = false;
  const {authCredentials} = useAuthCrendentials();

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

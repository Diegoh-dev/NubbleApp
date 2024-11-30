import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {ActivityIndicator, Box} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {OnboardingStack} from './OnboardingStack';
import {Stacks, useRouter} from './useRouter';

function LoadingScree() {
  return (
    <Box
      flex={1}
      backgroundColor="background"
      justifyContent="center"
      alignContent="center">
      <ActivityIndicator color="primary" size={'large'} />
    </Box>
  );
}

const stacks: Record<Stacks, React.ReactElement> = {
  Loading: <LoadingScree />,
  Auth: <AuthStack />,
  App: <AppStack />,
  Onboarding: <OnboardingStack />,
};

export function Router() {
  const stack = useRouter();
  const Stack = stacks[stack];

  return <NavigationContainer>{Stack}</NavigationContainer>;
}

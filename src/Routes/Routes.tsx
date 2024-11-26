import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {useAuthCrendentials} from '@services';

// import {ActivityIndicator, Box} from '@components';

// import {AppStack} from './AppStack';
// import {AuthStack} from './AuthStack';
import {OnboardingStack} from './OnboardingStack';

export function Router() {
  // const isSignedIn = false;
  // const {authCredentials, isLoading} = useAuthCrendentials();

  // if (isLoading) {
  //   return (
  //     <Box
  //       flex={1}
  //       backgroundColor="background"
  //       justifyContent="center"
  //       alignContent="center">
  //       <ActivityIndicator color="primary" size={'large'} />
  //     </Box>
  //   );
  // }

  return (
    <NavigationContainer>
      {/* {authCredentials ? <AppStack/> : <AuthStack />} */}
      <OnboardingStack />
    </NavigationContainer>
  );
}

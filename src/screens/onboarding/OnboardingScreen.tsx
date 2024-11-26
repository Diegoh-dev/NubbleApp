import React from 'react';

import {OnboardingScreenProps} from '@Routes';

import {Box} from '@components';

import {OnboardingPage} from './components/OnboardingPage';

export function OnboardingScreen({
  navigation,
}: OnboardingScreenProps<'OnboardingScreen'>) {
  console.log(navigation);
  return (
    <Box flex={1} backgroundColor="error">
      <OnboardingPage />
    </Box>
  );
}

import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {OnboardingPageProps} from './OnboardingPage';

type ButtonMenuProps = Omit<OnboardingPageProps, 'pageItem'>;
export function ButtonMenu({onPressNext, onPressSkip}: ButtonMenuProps) {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <PressableBox hitSlop={10} onPress={onPressSkip}>
        <Text semiBold color="gray2">
          Pular
        </Text>
      </PressableBox>
      <PressableBox
        hitSlop={10}
        onPress={onPressNext}
        flexDirection="row"
        alignItems="center">
        <Text bold mr="s4">
          Próximo
        </Text>
        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  );
}

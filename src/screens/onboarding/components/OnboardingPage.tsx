import React from 'react';
import {Dimensions} from 'react-native';

import {Box} from '@components';

import {OnboardingPageItem} from '../onboardingData';

import {ButtonMenu} from './ButtonMenu';
import {Content} from './Content';
import {ImageHeader} from './ImageHeader';

export type OnboardingPageProps = {
  pageItem: OnboardingPageItem;
  onPressNext: () => void;
  onPressSkip: () => void;
};

const SCREEN_WIDTH = Dimensions.get('screen').width;
export function OnboardingPage({
  pageItem,
  onPressNext,
  onPressSkip,
}: OnboardingPageProps) {
  return (
    <Box flex={1} backgroundColor="background" width={SCREEN_WIDTH}>
      <Box flex={4} backgroundColor="error">
        <ImageHeader image={pageItem.image} />
      </Box>
      <Box flex={5} backgroundColor="carrotSecondary">
        <Content {...pageItem} />
      </Box>
      <Box flex={1} backgroundColor="success">
        <ButtonMenu onPressNext={onPressNext} onPressSkip={onPressSkip} />
      </Box>
    </Box>
  );
}

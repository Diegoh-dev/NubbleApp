import React from 'react';
import {Dimensions, Image} from 'react-native';

import {useAppColor} from '@services';

import {OnboardingPageItem} from '../onboardingFingData';

const SCREEN_WIDTH = Dimensions.get('screen').width;

type ImageHeaderProps = {
  image: OnboardingPageItem['image'];
};

export function ImageHeader({image}: ImageHeaderProps) {
  const appColor = useAppColor();
  console.log({
    appColor,
  });

  const source = appColor === 'light' ? image.light : image.dark;
  return <Image source={source} style={{width: SCREEN_WIDTH}} />;
}

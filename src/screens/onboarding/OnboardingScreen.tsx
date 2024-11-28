import React, {useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {OnboardingScreenProps} from '@Routes';

import {Box} from '@components';

import {OnboardingPage} from './components/OnboardingPage';
import {OnboardingPageItem, onboardingPages} from './onboardingData';

export function OnboardingScreen({
  navigation,
}: OnboardingScreenProps<'OnboardingScreen'>) {
  console.log(navigation);

  const [pageIndex, setPageIndex] = useState(0);

  const flatListRef = useRef<FlatList<OnboardingPageItem>>(null);

  function onPressNext() {
    const isLastPage = pageIndex === onboardingPages.length - 1;
    if (isLastPage) {
      onFinishOnboarding();
    } else {
      const nextIndex = pageIndex + 1;
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
      setPageIndex(nextIndex);
    }
  }

  function onFinishOnboarding() {}

  function renderItem({item}: ListRenderItemInfo<OnboardingPageItem>) {
    return (
      <OnboardingPage
        pageItem={item}
        onPressNext={onPressNext}
        onPressSkip={onFinishOnboarding}
      />
    );
  }

  return (
    <Box flex={1} backgroundColor="error">
      <FlatList
        ref={flatListRef}
        // scrollEnabled = desabilitar o scroll para que o usuário passe para a proxima página apenas usando os botões.
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={renderItem}
        data={onboardingPages}
      />
    </Box>
  );
}

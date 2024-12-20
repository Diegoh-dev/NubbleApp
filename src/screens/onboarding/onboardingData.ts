import {ImageProps} from 'react-native';

import {images} from '@assets';

export type OnboardingPageItem = {
  title: Array<{text: string; highlight: boolean}>;
  subtitle: string;
  image: {
    light: ImageProps['source'];
    dark: ImageProps['source'];
  };
  index: number;
  total: number;
  isLast: boolean;
};

type OnboardingPageItemWithhoutMeta = Omit<
  OnboardingPageItem,
  'index' | 'total' | 'isLast'
>;

const page1: OnboardingPageItemWithhoutMeta = {
  title: [
    {text: 'Uma rede social de', highlight: false},
    {text: '\nconexões reais ', highlight: true},
  ],
  subtitle:
    'Fique por dentro do que acontece com as pessoas que você mais gosta.',
  image: {
    light: images.onboardingLight1,
    dark: images.onboardingDark1,
  },
};

const page2: OnboardingPageItemWithhoutMeta = {
  title: [
    {text: 'Compartilhe suas', highlight: false},
    {text: '\nhistórias', highlight: true},
    {text: ' com seus amigos próximos', highlight: false},
  ],
  subtitle: 'Tenha sua linha do tempo personalizada',
  image: {
    light: images.onboardingLight2,
    dark: images.onboardingDark2,
  },
};

const page3: OnboardingPageItemWithhoutMeta = {
  title: [
    {text: 'Interaja', highlight: true},
    {text: ' em tempo real com as pessoas', highlight: false},
  ],
  subtitle: 'Curta, comente e favorite os conteúdos que você mais gostar',
  image: {
    light: images.onboardingLight3,
    dark: images.onboardingDark3,
  },
};

export const onboardingPages: OnboardingPageItem[] = [page1, page2, page3].map(
  (page, index, arrayPages) => ({
    ...page,
    index,
    total: arrayPages.length,
    isLast: index + 1 === arrayPages.length,
  }),
);

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppTheme} from '../hooks/useAppTheme';

// import {useAppTheme} from '@hooks';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {
    // pegar o maior valor
    top: Math.max(top, spacing.s20),
    bottom: Math.max(bottom, spacing.s20),
  };
}

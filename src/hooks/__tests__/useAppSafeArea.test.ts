import {renderHook} from '@testing-library/react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {AllTheProviders} from 'test-utils';

import {theme} from '@theme';

import {useAppSafeArea} from '../useAppSafeArea';

//mockando esse modulo
jest.mock('react-native-safe-area-context');

//mokando a função useSafeAreaInsets do modulo react-native-safe-area-context
const mokedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  test('when the safe area is less than minimum requirement, it returns the mininum requirement', () => {
    mokedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 5, bottom: 5} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea(), {
      wrapper: AllTheProviders,
    });

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });
  test('when the safe area is greater than minumum requirement, it returns the safe area', () => {
    mokedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 40, bottom: 40} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea(), {
      wrapper: AllTheProviders,
    });

    expect(result.current.top).toEqual(40);
    expect(result.current.bottom).toEqual(40);
  });
});

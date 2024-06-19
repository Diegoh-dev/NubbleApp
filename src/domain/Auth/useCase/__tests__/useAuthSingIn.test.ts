/* eslint-disable @typescript-eslint/no-unused-vars */
import {renderHook} from '@testing-library/react-native';
import {AllTheProviders} from 'test-utils';

import {useAuthSingIn} from '../useAuthSingIn';

//https://tanstack.com/query/v4/docs/framework/react/guides/testing
describe('useAuthSingIn', () => {
  it('saves credentials if the sign-in successFully', () => {
    const {result} = renderHook(useAuthSingIn, {
      wrapper: AllTheProviders,
    });
  });

  it('calls the onError function with a message if sign-in fails', () => {
    const {result} = renderHook(useAuthSingIn, {
      wrapper: AllTheProviders,
    });
  });
});

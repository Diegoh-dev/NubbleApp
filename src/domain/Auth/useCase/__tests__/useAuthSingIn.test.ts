import {renderHook} from '@testing-library/react-native';
import {AllTheProviders, waitFor} from 'test-utils';

import {authService} from '../../AuthService';
import {useAuthSingIn} from '../useAuthSingIn';

import {mockedAuthCredentials} from './mockedData/mocks';

const mockSaveCrendentials = jest.fn();

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    useAuthCrendentials: () => ({
      saveCrendentials: mockSaveCrendentials,
    }),
  };
});

//https://tanstack.com/query/v4/docs/framework/react/guides/testing
describe('useAuthSingIn', () => {
  it('saves credentials if the sign-in successFully', async () => {
    const mockOnSuccess = jest.fn();
    //mocando signIn do authService;
    jest
      .spyOn(authService, 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentials);

    const {result} = renderHook(() => useAuthSingIn({
      onSuccess:mockOnSuccess,
    }), {
      wrapper: AllTheProviders,
    });

    result.current.SignIn({
      email: 'diegoh.developer@gmail.com',
      password: '123',
    });

    //https://tanstack.com/query/v4/docs/framework/react/guides/testing
    //espera a mutation retornar com sucesso
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(mockSaveCrendentials).toHaveBeenCalledWith(mockedAuthCredentials);
    expect(mockOnSuccess).toHaveBeenCalledWith(mockedAuthCredentials);

  });

  it('calls the onError function with a message if sign-in fails', async() => {

    const mockOnError = jest.fn();
//https://jestjs.io/docs/mock-function-api#mockfnmockrejectedvaluevalue
    jest.spyOn(authService,'signIn').mockRejectedValue(new Error('invalid user'));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {result} = renderHook(() => useAuthSingIn({
      onError:mockOnError,
    }), {
      wrapper: AllTheProviders,
    });

    result.current.SignIn({
      email: 'diegoh.developer@gmail.com',
      password: '123',
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockOnError).toHaveBeenCalledWith('invalid user');

  });
});

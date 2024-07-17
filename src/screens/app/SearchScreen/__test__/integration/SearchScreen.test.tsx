import React from 'react';

import {authCredentialsStorage} from '@services';
import {mockUtils} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

beforeAll(() => {
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

describe('integration: SearchScreen', () => {
  test('Search Flow', () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // screen.debug();

    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    expect(inputText).toBeTruthy();

    //evento para simular o campo sendo digitado.
    fireEvent.changeText(inputText, 'mar');
  });
});

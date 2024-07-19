import React from 'react';

import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

//informa para o jest que ele deve importar o modulo original e não o mockado.
//https://jestjs.io/docs/jest-object#jestunmockmodulename
jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
});

describe('integration: SearchScreen', () => {
  test('Search Flow', async () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // screen.debug();

    const inputText = screen.getByPlaceholderText(/digite sua busca/i);

    //evento para simular o campo sendo digitado.
    fireEvent.changeText(inputText, 'mar');

    // verificar se os usuarios estão na tela
    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    // screen.debug();
    // clicar no usuário

    fireEvent.press(user1);


    //verificar se o usuário vai estar na outra tela(perfil do usuario)
    const userFullName = await screen.findByText(userMocked.user1.full_name);

    expect(userFullName).toBeTruthy();

  });
});

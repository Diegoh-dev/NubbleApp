import React from 'react';

import {AppStack} from '@Routes';
import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';
import {act, fireEvent, renderScreen, screen} from 'test-utils';

//informa para o jest que ele deve importar o modulo original e não o mockado.
//https://jestjs.io/docs/jest-object#jestunmockmodulename
jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers(); //usado devido ao debounce que exite na pesquisa (simula o timeout)
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
  jest.resetAllMocks();
});

describe('integration: SearchScreen', () => {
  test('Search Flow', async () => {
    //1 (NAVIGATE TO SEARCH SCREEN )
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // screen.debug();
    //2) FIND THE SEARCH INPUT AND TYPE USER NAME
    const inputText = screen.getByPlaceholderText(/digite sua busca/i);

    //evento para simular o campo sendo digitado.
    fireEvent.changeText(inputText, 'mar');
    act(() => jest.runAllTimers()); // para simular o timeOut do do filtro de pesquisa

    // verificar se os usuarios estão na tela
    // 3) FIND TWO USERS AS PER THE MSW MOCK
    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    // screen.debug();
    // clicar no usuário
    //4) SELECT THE USER1 AND NAVIGATE TO PROFILE SCREEN
    fireEvent.press(user1);

    //verificar se o usuário vai estar na outra tela(perfil do usuario)
    //5) EXPECT TO BE AT THE PROFILES SCREEN WITH THE USER1 LOADED
    const userFullName = await screen.findByText(userMocked.user1.full_name);

    expect(userFullName).toBeTruthy();

    // TESTE PARA SIMULAR VOLTANDO PARA A TELA DE LISTAGEM DE POSTS

    // 6) PRESS THE BACK BUTTON TO NAVIGATE BACK TO SEARCH SCREEN
    const backButton = screen.getByTestId('screen-back-button');
    fireEvent.press(backButton);

    //7)CLEAN THE SEARCH INPUT

    const inputTextAfterBack = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputTextAfterBack, '');
    act(() => jest.runAllTimers());
    // para simular o timeOut(debunce) do do filtro de pesquisa

    // 8) MAKE SURE THE SEARCH HISTORY (BUSCAS RECENTES) SECTION APPEARS

    const searchHistoryTitle = screen.getByText(/buscas recentes/i);
    expect(searchHistoryTitle).toBeTruthy();

    //9) THE USER1 (PRESSED) WAS THE SAVED IN THE SEARCH HISTORY

    const user1AfterBack = screen.queryByText(userMocked.user1.username);
    expect(user1AfterBack).toBeTruthy();

    //10) THE USER2 (NOT PRESSED) MUST NOT APPEAR IN THE SEARCH HISTORY
    //queryByText para quando quer verificar que o item não está na tela
    const user2AfterBack = screen.queryByText(userMocked.user2.username);
    expect(user2AfterBack).toBeFalsy();

    // 11) REMOVE USER1 FROM THE SEARCH HISTORY BY PRESSING THE TRASH ICON

    const trashIcon = screen.getByTestId('trash');
    fireEvent.press(trashIcon);

    // 12) MAKE SURE THE USER1 WAS REMOVED FROM THE SEARCH HISTORY

    const user1AfterBackRemoved = screen.queryByText(userMocked.user1.username);
    expect(user1AfterBackRemoved).toBeFalsy();
  });
});

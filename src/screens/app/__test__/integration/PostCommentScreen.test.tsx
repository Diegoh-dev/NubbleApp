import React from 'react';
import {Alert, AlertButton} from 'react-native';

import {authCredentialsStorage} from '@services';
import {server, mockedPostComment, resetInMemoryResponse} from '@test';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen/PostCommentScreen';

beforeAll(() => {
  server.listen();
  //https://jestjs.io/docs/timer-mocks
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
  resetInMemoryResponse();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
  //https://jestjs.io/docs/timer-mocks
  jest.useRealTimers();
});

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment, the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(/comentário aleatório/i);

    expect(comment).toBeTruthy();

    // achar o campo de input
    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);

    // digitar a mensagem
    fireEvent.changeText(inputText, 'novo comentário');

    // clicar em enviar
    fireEvent.press(screen.getByText(/enviar/i));

    //espera: a lista atualizada com o novo comentário
    const newComment = await screen.findByText(/novo comentário/i);
    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(3);
  }, 5000);

  test('When DELETING a comment, the list is automatically updated and a toast message is displayed ', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress;
        }
      });

    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    // esperar a lista carregar
    // identificar o comentário que será deletado
    const comment = await screen.findByText(
      mockedPostComment.mateusPostCommentAPI.message,
      {exact: false},
    );

    expect(comment).toBeTruthy();

    // long press no comentário
    fireEvent(comment, 'longPress');

    expect(mockedAlert).toHaveBeenCalled();

    // pressionar em "confirmar" no alert
    mockedConfirm && mockedConfirm();

    //https://callstack.github.io/react-native-testing-library/docs/api#waitforelementtoberemoved
    // verificar se a list foi atualizada (meu comentário sumiu)
    await waitForElementToBeRemoved(() =>
      screen.getByText(mockedPostComment.mateusPostCommentAPI.message, {
        exact: false,
      }),
    );

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(1);

    // verificar se foi exibida a toast message

    await waitFor(() =>
      expect(screen.getByTestId('toast-message')).toBeTruthy(),
    );

    // https://jestjs.io/docs/timer-mocks
    //jest.runAllTimers() => executa a função que está usando o time. usa-se "act" para avisar que o componente vai provocar uma reRenderização no componente.
    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast-message')).toBeNull();
  });
});

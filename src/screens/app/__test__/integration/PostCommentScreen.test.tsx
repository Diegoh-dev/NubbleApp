import React from 'react';

import {server} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen/PostCommentScreen';

// COMEÇAR A ESCUTAR AS REQUISIÇÕES.
beforeAll(() => server.listen());
// RESETAR OS HANDLES.
afterEach(() => server.resetHandlers());
// ENCERRAR A CONEXÃO COM O SERVIDO.
afterAll(() => server.close());

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postAuthorId: 1,
            postId: 1,
          },
        }}
      />,
    );

    // como é uma função assincrona usa o findByText;
    const comment = await screen.findByText(/comentário aleatório/i);

    expect(comment).toBeTruthy();

    // QUAIS PASSOS ACONTECEM:?

    //1- ACHAR O CAMPO DE INPUT
    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);

    //2- DIGITAR A MENSAGEM
    fireEvent.changeText(inputText, 'novo comentário');

    //3- CLICAR EM ENVIAR
    fireEvent.press(screen.getByText(/Enviar/i));

    //4- ESPERA: A LISTA ATUALIZADA COM O NOVO COMENTÁRIO

    const newComment = await screen.findByText(/novo comentário/i);

    expect(newComment).toBeTruthy();

    //pegar os comentários

    const comments = await screen.findAllByTestId('post-comment-id');
    //espera que tenha 2 itens na lista;
    expect(comments.length).toBe(2);
  });
});

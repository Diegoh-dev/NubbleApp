import React from 'react';

import {server} from '@test';
import {renderScreen, screen} from 'test-utils';

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
  });
});

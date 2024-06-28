import {BASE_URL, PageAPI} from '@api';
import {POST_COMMENT_PATH, PostCommentAPI} from '@domain';
import {http, HttpResponse} from 'msw';

import {mockedData} from './mocks';

export const postCommentHandlers = [
  //primeiro parametro a rota | o segundo parametro é o "resolver", onde vamos pegar os dados mock da requisição.
  http.get(`${BASE_URL}${POST_COMMENT_PATH}`, async () => {
    const response: PageAPI<PostCommentAPI> =
      mockedData.mockedPostCommentResponse;

    return HttpResponse.json(response, {status: 200});
  }),
];

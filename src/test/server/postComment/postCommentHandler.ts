// import {BASE_URL, PageAPI} from '@api';
import {POST_COMMENT_PATH, PostCommentAPI} from '@domain';
import {cloneDeep} from 'lodash';
import {http, HttpResponse} from 'msw';

// import {BASE_URL} from '../../../api/apiConfig';
import {BASE_URL} from '../../../api/apiInstance';
import {PageAPI} from '../../../api/apiTypes';

import {mockedData} from './mocks';

const FULL_URL = `${BASE_URL}${POST_COMMENT_PATH}`;

let inMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse);

export function resetInMemoryResponse() {
  inMemoryResponse = cloneDeep(mockedData.mockedPostCommentResponse);
}

export const postCommentHandlers = [
  //primeiro parametro a rota | o segundo parametro é o "resolver", onde vamos pegar os dados mock da requisição.
  http.get(FULL_URL, async () => {
    const response: PageAPI<PostCommentAPI> = inMemoryResponse;

    return HttpResponse.json(response, {status: 200});
  }),

  http.post<any, {post_id: number; message: string}>(
    FULL_URL,
    async ({request}) => {
      const body = await request.json();

      const newPostCommentAPI: PostCommentAPI = {
        ...mockedData.postCommentAPI,
        id: 999,
        post_id: body.post_id,
        message: body.message,
      };

      inMemoryResponse.data = [newPostCommentAPI, ...inMemoryResponse.data];
      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total + 1,
      };

      return HttpResponse.json(newPostCommentAPI, {status: 201});
    },
  ),

  //https://mswjs.io/docs/network-behavior/rest#reading-path-parameters

  http.delete<{postCommentId: string}>(
    `${FULL_URL}/:postCommentId`,
    async ({params}) => {
      inMemoryResponse.data = inMemoryResponse.data.filter(
        item => item.id.toString() !== params.postCommentId,
      );

      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total - 1,
      };

      return HttpResponse.json({message: 'removed'}, {status: 200});
    },
  ),
];

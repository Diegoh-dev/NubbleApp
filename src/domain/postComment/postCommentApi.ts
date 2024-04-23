// ARQUIVO RESPONSAVEL POR FAZER A CONEXÃO COM API

import {PageAPI, api} from '@api';

import {PageParams} from '../Post/postTypes';

import {PostCommentAPI} from './postCommentTypes';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  let response = await api.get<PageAPI<PostCommentAPI>>('user/post_comment', {
    params: {
      post_id,
      ...pageParams,
    },
  });

  console.log('response:',response)
  return response.data;
}

export const postCommentApi = {
  getList,
};

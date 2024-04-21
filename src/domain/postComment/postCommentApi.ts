// ARQUIVO RESPONSAVEL POR FAZER A CONEXÃO COM API

import {PageAPI, api} from '@api';

import {PageParams} from '../Post/postTypes';

import {PostCommentAPI} from './postCommentTypes';

async function getList(
  postId: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  let response = await api.get<PageAPI<PostCommentAPI>>('post_comment', {
    params: {
      postId,
      ...pageParams,
    },
  });

  return response.data;
}

export const postCommentApi = {
  getList,
};

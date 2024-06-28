// ARQUIVO RESPONSAVEL POR FAZER A CONEXÃO COM API

import {PageAPI, api} from '@api';

import {PageParams} from '../Post/postTypes';

import {PostCommentAPI} from './postCommentTypes';

export const POST_COMMENT_PATH = 'user/post_comment';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  let response = await api.get<PageAPI<PostCommentAPI>>(POST_COMMENT_PATH, {
    params: {
      post_id,
      ...pageParams,
    },
  });

  return response.data;
}


async function create(
  post_id: number,
  message: string,
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>(POST_COMMENT_PATH, {post_id, message});

  return response.data;
}


async function remove(postCommentId:number):Promise<{message:string}>{

  const response = await api.delete<{message:string}>(`${POST_COMMENT_PATH}/${postCommentId}`);

  return response.data;
}

export const postCommentApi = {
  getList,
  create,
  remove
};

// ARQUIVO RESPONSAVEL POR FAZER A CONEXÃO COM API

// import {PageAPI, api} from '@api';
// import {ImageForUpload} from '../../services/multiMidiaService/multiMidiaType';

import {ImageForUpload} from '@services';

// import {api} from '../../api/apiConfig';
import {api} from '../../api/apiInstance';
import {PageAPI} from '../../api/apiTypes';

import {PageParams, PostAPI} from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  //TODO: simular um delay na API
  // endereço ip
  //172.27.64.1:3333

  let response = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  });

  return response.data;
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<PostAPI> {
  const form = new FormData();
  form.append('text', text);
  form.append('imageCover', imageCover);

  const response = await api.postForm<PostAPI>('user/post', form);

  return response.data;
}

export const postApi = {
  getList,
  createPost,
};

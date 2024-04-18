// ARQUIVO RESPONSAVEL POR FAZER A CONEXÃO COM API

import {PageAPI, api} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  //TODO: simular um delay na API
  // endereço ip
  //172.27.64.1:3333

  await new Promise(resolve => setTimeout(() => resolve(''), 2000));

  let response = await api.get<PageAPI<PostAPI>>('user/post');

  return response.data;
}

export const postApi = {
  getList,
};


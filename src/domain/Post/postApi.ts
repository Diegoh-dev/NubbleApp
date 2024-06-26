// ARQUIVO RESPONSAVEL POR FAZER A CONEXÃO COM API

import {PageAPI, api} from '@api';

import {PageParams, PostAPI} from './postTypes';

async function getList(params?:PageParams): Promise<PageAPI<PostAPI>> {
  //TODO: simular um delay na API
  // endereço ip
  //172.27.64.1:3333


  let response = await api.get<PageAPI<PostAPI>>('user/post',{
    params,
  });

  return response.data;
}

export const postApi = {
  getList,
};


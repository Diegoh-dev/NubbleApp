// ARQUIVO RESPONSAVEL POR FAZER A CONEXÃO COM API

import {PageAPI} from '@api';

import {PostAPI} from './postTypes';


async function getList(): Promise<PageAPI<PostAPI>> {
  //TODO: simular um delay na API
  // endereço ip
  //172.27.64.1:3333
  let response = await fetch('http://172.27.64.1:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MzQ.VC8JqsDiCWToOg5k2DcFSqkJXe-euyvOkE5JLO3VklQXJy9OqqtvOdgXe6YZ',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();
  console.log(data);

  return data;
}

export const postApi = {
  getList,
};

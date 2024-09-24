// CAMADA INTERMEDIARIA QUE VAI FAZER A CONEXÃO ENTRE API/REPOSITORIO;
// O APP NÃO ACESSA DIRETO A API OU REPOSITORIO, ELE ACESSA A CAMADA DE SERVIÇO;
// A UNICA COISA QUE O APP PRECISA SABER É QUE ELE PODE ACESSAR UM SERVIÇO QUE RETORNA UMA LISTA PARA ELE.

import {apiAdapter} from '@api';
import { ImageForUpload } from '@services';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postPageApi = await postApi.getList({page, per_page: 10});

  // Refatoração
  return apiAdapter.toPageModel(postPageApi, postAdapter.toPost);

  // return {
  //   data: postPageApi.data.map(postAdapter.toPost),
  //   meta: apiAdapter.toMetaDataPage(postPageApi.meta),
  // };
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<Post> {
  const postApiData = await postApi.createPost(text, imageCover);
  return postAdapter.toPost(postApiData);
}

// ESSE É O SERVICO QUE O APP/COMPONENTES VÃO UTILIZAR
export const postService = {
  getList,
  createPost,
};

// CAMADA INTERMEDIARIA QUE VAI FAZER A CONEXÃO ENTRE API/REPOSITORIO;
// O APP NÃO ACESSA DIRETO A API OU REPOSITORIO, ELE ACESSA A CAMADA DE SERVIÇO;
// A UNICA COISA QUE O APP PRECISA SABER É QUE ELE PODE ACESSAR UM SERVIÇO QUE RETORNA UMA LISTA PARA ELE.

import {apiAdapter} from '@api';
import {Page} from '@types';

import { postCommentAdapter } from './postCommentAdapter';
import { postCommentApi } from './postCommentApi';
import { PostComment } from './postCommentTypes';

const PER_PAGE = 10;

async function getList(postId:number,page: number): Promise<Page<PostComment>> {
  const postCommentPageApi = await postCommentApi.getList(postId,{page,per_page:PER_PAGE});


  return {
    data: postCommentPageApi.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageApi.meta),
  };
}

// ESSE É O SERVICO QUE O APP/COMPONENTES VÃO UTILIZAR
export const postCommentService = {
  getList,
};

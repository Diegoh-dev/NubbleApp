// CAMADA INTERMEDIARIA QUE VAI FAZER A CONEXÃO ENTRE API/REPOSITORIO;
// O APP NÃO ACESSA DIRETO A API OU REPOSITORIO, ELE ACESSA A CAMADA DE SERVIÇO;
// A UNICA COISA QUE O APP PRECISA SABER É QUE ELE PODE ACESSAR UM SERVIÇO QUE RETORNA UMA LISTA PARA ELE.

import { postAdapter } from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  const postPageApi = await postApi.getList();

  // return []
  //  throw new Error('Deu ruim');
  return postPageApi.data.map(postAdapter.toPost);
}

// ESSE É O SERVICO QUE O APP/COMPONENTES VÃO UTILIZAR
export const postService = {
  getList,
};

// ARQUIVO RESPONSAVEL POR FAZER A CONEXÃO COM API

import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODO: simular um delay na API
    // endereço ip
  //172.27.64.1:3333
  try {
    let response = await fetch('http://172.27.64.1:3333/user/post', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer MzQ.VC8JqsDiCWToOg5k2DcFSqkJXe-euyvOkE5JLO3VklQXJy9OqqtvOdgXe6YZ',
      },
    });

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  //   let data = await response.json();
  //   console.log(data);

  // await new Promise((resolve) => setTimeout(()=>{resolve('')} ,1000));

  return postListMock;
}

export const postApi = {
  getList,
};

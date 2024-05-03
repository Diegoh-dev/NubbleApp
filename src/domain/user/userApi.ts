import {api} from '@api';

import {UserAPI} from './userTypes';

const PATH = 'users';

async function getList(idUser: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${PATH}/${idUser}`);

  return response.data;
}

export const userApi = {
  getList,
};

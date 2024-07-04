import {PageAPI, api} from '@api';

import {UserAPI} from './userTypes';

const PATH = 'users';

async function getById(idUser: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${PATH}/${idUser}`);

  return response.data;
}

async function getList(search: string): Promise<PageAPI<UserAPI>> {
  const response = await api.get<PageAPI<UserAPI>>(`${PATH}`, {
    params: {search},
  });
  return response.data;
}

export const userApi = {
  getById,
  getList,
};

import { apiAdapter } from '@api';
import { Page } from '@types';

import { userAdapter } from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getById(idUser: number): Promise<User> {
  const apiUser = await userApi.getById(idUser.toString());

  return userAdapter.toUser(apiUser);
}

async function searchUser(search:string):Promise<Page<User>>{
  const usePageAPI = await userApi.getList(search);

  return apiAdapter.toPageModel(usePageAPI,userAdapter.toUser);

}

export const userService = {
  getById,
  searchUser,
};

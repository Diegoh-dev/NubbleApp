import { userAdapter } from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getList(idUser: number): Promise<User> {
  const apiUser = await userApi.getList(idUser.toString());

  return userAdapter.toUser(apiUser);
}

export const userService = {
  getList,
};

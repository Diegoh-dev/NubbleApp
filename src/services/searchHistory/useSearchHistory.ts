import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {SearchHistoryService} from './searchHistoryType';

//https://github.com/pmndrs/zustand#selecting-multiple-state-slices
const useSearchHistoryStore = create<SearchHistoryService>()(
  persist(
    (set, get) => ({
      userList: [],
      addUser: user => {
        const userList = get().userList;
        const userExist = userList.find(item => item.id === user.id);

        if (!userExist) {
          const updateList = [...userList, user];
          set({
            userList: updateList,
          });
        }
      },
      removeUser: useId => {
        const useList = get().userList;
        const updateList = useList.filter(user => user.id !== useId);
        set({
          userList: updateList,
        });
      },
      clearUserList: () => {
        set({
          userList: [],
        });
      },
    }),
    {
      name: '@searchHistory',
      storage: storage,
    },
  ),
);

export function useSearchHistory(): SearchHistoryService['userList'] {
  const userList = useSearchHistoryStore(state => state.userList);

  return userList;
}

export function useSearchHistoryService(): Omit<
  SearchHistoryService,
  'userList'
> {
  const addUser = useSearchHistoryStore(state => state.addUser);
  const removeUser = useSearchHistoryStore(state => state.removeUser);
  const clearUserList = useSearchHistoryStore(state => state.clearUserList);

  return {
    addUser,
    removeUser,
    clearUserList,
  };
}

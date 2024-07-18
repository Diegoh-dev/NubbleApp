// PARA CORRIGIR O WORNING DO STORAGE QUE NÃO FOI INICIADO NOS TESTE
//  console.warn [zustand persist middleware] Unable to update item '@searchHistory', the given storage is currently unavailable.

import {Storage} from '../../storage';

let storage: Record<string, any> = {};

// IMPLEMENTAÇÃO USADA PARA TESTES
//CONFIGURADO NO JESTSETUP
export const inMemoryStorage: Storage = {
  getItem: jest.fn(key => {
    if (key in storage) {
      return storage[key];
    } else {
      return null;
    }
  }),
  removeItem: jest.fn(async key => {
    if (key in storage) {
      delete storage[key];
    }
  }),
  setItem: jest.fn(async (key, value) => {
    storage[key] = value;
  }),
};

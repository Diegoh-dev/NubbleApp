// import {api} from './apiConfig';

import {api} from './apiInstance';

function updateToken(token: string) {
  //https://axios-http.com/docs/config_defaults
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

export const apiUtils = {
  updateToken,
  removeToken,
};

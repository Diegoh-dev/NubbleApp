import {AuthAPI, AuthTypes} from './authTypes';

function toAuthTypes(authApi: AuthAPI): AuthTypes {
  return {
    auth:{
       type:authApi.auth.type,
       token:authApi.auth.token, 
    },
    user:{
        id:authApi.user.id,
        firstName:authApi.user.first_name,
        lastName:authApi.user.last_name,
        username:authApi.user.username,
        email:authApi.user.email,
        tempToken:authApi.user.temp_token,
        rememberMeToken:authApi.user.remember_me_token,
        profileUrl:authApi.user.profile_url,
        isOnline:authApi.user.is_online,
        tempTokenCreatedAt:authApi.user.temp_token_created_at,
        rememberMeTokenCreatedAt:authApi.user.remember_me_token_created_at,
        fullName:authApi.user.full_name,
    }
  };
}

export const authAdapter = {
  toAuthTypes,
};

import {authService} from '../AuthService';

export async function useAuthSingOut() {
  const reponse = await authService.signOut();

  return reponse;
}

import { authService } from "../AuthService";

export async function useAuthSingIn(email:string,password:string){
    const token = await authService.getAuth(email,password);
    return token.auth.token;
}
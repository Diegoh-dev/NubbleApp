import {z} from 'zod';

export const loginScreenShema = z.object({
    email:z.string().email("email inválido"),
    password:z.string().min(8,"Senha deve ter no mínimo 8 caracteres")
});

export type loginScreenShemaType = z.infer<typeof loginScreenShema>;
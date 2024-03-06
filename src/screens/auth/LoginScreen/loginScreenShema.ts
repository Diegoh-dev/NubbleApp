import {z} from 'zod';

export const loginScreenShema = z.object({
    email:z.string().email('email inválido'),
    password:z.string().min(1,'senha obrigatória'),
});

export type loginScreenShemaType = z.infer<typeof loginScreenShema>;

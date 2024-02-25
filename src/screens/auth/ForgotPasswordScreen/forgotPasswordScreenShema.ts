import {z} from 'zod';

export const forgotPasswordScreenShema = z.object({
    email:z.string().email("email inválido")
});

export type forgotPasswordScreenShemaType = z.infer<typeof forgotPasswordScreenShema>;
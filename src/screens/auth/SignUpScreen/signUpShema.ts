import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpShema = z.object({
  username: z.string().min(5,'username muito curto').regex(userNameRegex, 'username inválido').toLowerCase(),
  firstName: z
    .string()
    .min(5, 'nome muito curto')
    .max(50, 'nome muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  lastName: z
    .string()
    .min(5, 'nome muito curto')
    .max(50, 'nome muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.string().email('email inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

// zod vai inferir o tipo travez do objeto shema
export type SignUpShematype = z.infer<typeof signUpShema>;

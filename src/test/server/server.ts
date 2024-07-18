import {setupServer}  from 'msw/node';

import { postCommentHandlers } from './postComment/postCommentHandler';
import { userHandlers } from './user/useHandlers';

export const server = setupServer(...postCommentHandlers,...userHandlers);

export {mockedData as mockedPostComment} from './postComment/mocks';

export {userMocked} from './user/useMocked';

export {resetInMemoryResponse} from './postComment/postCommentHandler';

//https://mswjs.io/
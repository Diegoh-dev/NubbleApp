import {setupServer}  from 'msw/node';

import { postCommentHandlers } from './postComment/postCommentHandler';

export const server = setupServer(...postCommentHandlers);

export {mockedData as mockedPostComment} from './postComment/mocks';

export {resetInMemoryResponse} from './postComment/postCommentHandler';
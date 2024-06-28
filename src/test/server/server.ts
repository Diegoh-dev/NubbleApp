import {setupServer}  from 'msw/node';

import { postCommentHandlers } from './postComment/postCommentHandler';

export const server = setupServer(...postCommentHandlers);

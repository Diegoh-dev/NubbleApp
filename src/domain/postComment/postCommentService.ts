// import {apiAdapter} from '@api';
import {Page} from '@types';

import {apiAdapter} from '../../api/apiAdapter';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;
async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  // Refatoração
  return apiAdapter.toPageModel(
    postCommentPageAPI,
    postCommentAdapter.toPostComment,
  );

  // return {
  //   data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
  //   meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  // };
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPi = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPi);
}

async function remove(postCommentId: number): Promise<string> {
  const postCommentRemoveAPi = await postCommentApi.remove(postCommentId);

  return postCommentRemoveAPi.message;
}

/**
 * @description user can delete the comment if it is the post author or comment author
 *
 * @param postComment  comment to be deleted
 * @param userId the current session user id
 * @param postAuthorId the id of the post author
 */

function isAllowToDelete(
  postComment: PostComment,
  userId: number | null,
  postAuthorId: number,
): boolean {
  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthorId === userId) {
    return true;
  }

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};

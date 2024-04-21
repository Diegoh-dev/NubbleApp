import {PostComment, PostCommentAPI} from './postCommentTypes';

function toPostComment(postCommentApi: PostCommentAPI): PostComment {
  return {
    id: postCommentApi.id,
    message: postCommentApi.message,
    createdAt: postCommentApi.created_at,
    author: {
        id:postCommentApi.user.id,
      name: postCommentApi.user.full_name,
      profileURL: postCommentApi.user.profile_url,
      userName: postCommentApi.user.username,
    },
  };
}

export const postCommentAdapter = {
    toPostComment,
};

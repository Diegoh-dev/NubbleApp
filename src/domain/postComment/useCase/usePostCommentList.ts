import {usePaginatedList} from '@infra';

import {postCommentService} from '../postCommentService';


export function usePostCommentList(postId: number) {
  // adeguando a nossa função ao hook de paginação
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }
  return usePaginatedList(getList);
}

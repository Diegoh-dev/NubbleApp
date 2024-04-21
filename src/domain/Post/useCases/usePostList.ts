import {postService, usePaginatedList} from '@domain';

import {Post} from '../postTypes';

export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}

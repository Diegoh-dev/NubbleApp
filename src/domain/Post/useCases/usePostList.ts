import {postService} from '@domain';
import {QueryKeys, usePaginatedList} from '@infra';

import {Post} from '../postTypes';


export function usePostList() {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.getList);
}

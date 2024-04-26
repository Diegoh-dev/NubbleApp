import {postService} from '@domain';
import {usePaginatedList} from '@infra';

import {Post} from '../postTypes';


export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}

import {useEffect, useState} from 'react';

import {postService} from '@domain';

import {Post} from '../postTypes';

export function usePostList() {
  const [loding, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postList,
    loding,
    error,
    refetch: fetchData,
  };
}

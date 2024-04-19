import {useEffect, useState} from 'react';

import {postService} from '@domain';

import {Post} from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loding, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(1);
      //TODO: validar se tem mais paginas
      setPage(2);
      setPostList(list);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loding) return;
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    postList,
    loding,
    error,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}

import {useEffect, useState} from 'react';

import {postService} from '@domain';

import {Post} from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loding, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await postService.getList(1);
      //TODO: validar se tem mais paginas
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
      setPostList(data);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loding || !hasNextPage) {
      return;
    }
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await postService.getList(page);
      setPostList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
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

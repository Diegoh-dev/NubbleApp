import {useEffect, useState} from 'react';

import {postService} from '@domain';

import {Post} from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loding, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPage(prev => prev + 1);
      setPostList((prev) => [...prev,...list]);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loding) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    postList,
    loding,
    error,
    refetch: fetchData,
    fetchNextPage,
  };
}

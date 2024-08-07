import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

export interface usePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

interface PaginatedListOption {
  /**
   * Set this to false to disable automatic refetching when the query mounts or changes query keys. To refetch the query, use the refetch method returned from the useQuery instance. Defaults to true.
   */
  enabled?: boolean;
   /**
   * The time in milliseconds after data is considered stale. If set to Infinity, the data will never be considered stale.
   */
  staleTime?: number;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
  option?: PaginatedListOption,
): usePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
    enabled: option?.enabled,
    staleTime: option?.staleTime,
  });

  useEffect(() => {
    if (query.data) {
      // console.log(query.data)
      const newList = query.data.pages.reduce<Data[]>((prev, current) => {
        return [...prev, ...current.data];
      }, []);

      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isLoading: query.isLoading,
    isError: query.isError,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}

import {MetaDataPage, Page} from '@types';
import {renderHook, waitFor} from 'test-utils';

import {usePaginatedList} from '../usePaginatedList';

const page1 = ['item1', 'item2', 'item3'];
const page2 = ['item4', 'item5', 'item5'];

function geList(page: number): Promise<Page<string>> {
  const data = page === 1 ? page1 : page2;

  const meta: MetaDataPage = {
    currentPage: page,
    firstPage: 1,
    lastPage: 2,
    hasNextPage: page === 1,
    hasPreviousPage: page === 2,
    perPage: 3,
    total: 6,
  };

  return Promise.resolve({data, meta});
}

describe('usePaginatedList', () => {
  it('returns all pages together and stops fetching if there are no more page', async () => {
    // retornar todas as paginas juntas e para de buscar se não hover mais paginas;
    const {result} = renderHook(() => usePaginatedList(['key'], geList));
    //https://callstack.github.io/react-native-testing-library/docs/api#waitfor
    //https://jestjs.io/docs/expect#tostrictequalvalue
    await waitFor(() => expect(result.current.list).toStrictEqual(page1));

    result.current.fetchNextPage();

  await waitFor(() =>
    expect(result.current.list).toStrictEqual([...page1, ...page2]),
  );

  });
});

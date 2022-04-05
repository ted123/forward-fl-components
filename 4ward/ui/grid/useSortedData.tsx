import { useState, useCallback } from 'react';

function useSortedData(data) {
  const [sortKey, setSortKey] = useState('FirstName');
  const [sortOrder, setSortOrder] = useState('ascn');
  const [datas] = useState(data);

  const sortData = ({ tableData, reverse }) => {
    if (!sortKey) return tableData;
    const sortedData = datas.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));

    if (reverse) {
      return sortedData.reverse();
    }
    return sortedData;
  };

  const sortedData = useCallback(
    () => sortData({ tableData: datas, reverse: sortOrder === 'desc' }),
    [datas, sortOrder],
  );

  const onChangeSort = (sortby) => {
    setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
    setSortKey(sortby);
  };
  return {
    sortedData, sortKey, sortOrder, onChangeSort,
  };
}

export default useSortedData;

import React from 'react';
import { Grid, SortButton } from './grid';
import useSortedData from './useSortedData';
import {
  GridHeader,
  GridRow,
  GridBody,
  GridCell,
  GridColumn,
} from './style';

export const BasicGrid = () => {
  const header = [
    {
      key: 'FirstName',
      label: 'FirstName',
      sort: true,
      width: '100px',
    },
    {
      key: 'LastName',
      label: 'LastName',
      sort: false,
      width: '200px',
    },
    {
      key: 'usage',
      label: 'Usage',
      sort: true,
    },
  ];
  const data = [
    {
      FirstName: '0A-firstname1',
      LastName: '$*lastnameeeeeeeeeeeeeeeeeeee',
      title: 'Aromoted Manual kkho My Res link',
      type: 'link',
      status: 'Visited',
      usage: '02/03/22',
      customType: 'Web Page',
      finishedOn: '02/3/22',
    },
    {
      FirstName: '@*B-firstname2',
      LastName: 'lastname2',
      title: 'Bromoted Manual kkho My Res link',
      type: 'link',
      status: 'Visited',
      usage: '02/06/22',
      customType: 'Web Page',
      finishedOn: '02/6/22',
    },
    {
      FirstName: 'C-Firstname3',
      LastName: '**lastname',
      title: 'Citle3',
      type: 'video3',
      status: 'Visited3',
      usage: '05/08/22',
      customType: 'Web Page3',
      finishedOn: '05/8/22',
    },
    {
      FirstName: 'D-firstname4',
      LastName: 'lastname4',
      title: 'Dromoted Manual kkho My Res link 4',
      type: 'link',
      status: 'Visited',
      usage: '03/04/22',
      customType: 'Web Page',
      finishedOn: '03/4/22',
    },
  ];

  const {
    sortedData, sortKey, sortOrder, onChangeSort,
  } = useSortedData(data);
  return (
    <Grid
      data-testid="GridId"
    >
      <GridHeader>
        {header.map((row) => (
          <GridColumn width={row.width} sortBy={row.key} data-testid="GridColumnId" key={row.key}>
            {row.label}
            {row.sort
              && (
                <SortButton
                  onClick={() => onChangeSort(row.key)}
                  sortBy={sortKey}
                  sortDirection={sortOrder}
                  columnKey={row.key}
                  data-testid={`SortButtonId${row.key}${sortOrder}`}
                />
              )}
          </GridColumn>
        ))}
      </GridHeader>
      <GridBody>
        {sortedData().map((dta) => (
          <GridRow data-testid="SuperGridRowId" key={dta.FirstName}>
            {header?.map((row) => (
              <GridCell data-testid="GridCellId" key={dta[row.key]}>
                {dta[row.key]}
              </GridCell>
            ))}
          </GridRow>
        ))}
      </GridBody>
    </Grid>
  );
};

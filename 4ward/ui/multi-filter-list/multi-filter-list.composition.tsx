import React, { useEffect, useState } from 'react';
import { MultiFilterListItem } from '@4ward/ui.multi-filter-list-item';
import { MultiFilterList } from './multi-filter-list';

const STUB_DATA = [{
  key: '1',
  value: '1',
  label: 'The fox jumped over the lazy dog',
}, {
  key: '2',
  value: '2',
  label: 'Two',
}, {
  key: '3',
  value: '3',
  label: 'Three',
}, {
  key: '4',
  value: '4',
  label: 'Four',
}, {
  key: '5',
  value: '5',
  label: 'Five',
}, {
  key: '6',
  value: '6',
  label: 'Six',
}, {
  key: '8',
  value: '7',
  label: 'Otso',
}, {
  key: '8',
  value: '8',
  label: 'Otso',
}];

export const BasicMultiFilterList = () => {
  const [data, setData] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setData(STUB_DATA);
  }, []);

  return (
    <div>
      <MultiFilterList
        label="Multi-Filter"
        selected={values}
        labelWeight="bold"
        defaultSelectedText="None"
        searchPlaceholder="Type here to filter"
        onSelectChange={(selectedValues) => setValues(selectedValues)}
      >
        {data.map((option) => (
          <MultiFilterListItem
            key={option.value}
            item={option}
          >
            {option.label}
          </MultiFilterListItem>
        ))}
      </MultiFilterList>

      <p>
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};

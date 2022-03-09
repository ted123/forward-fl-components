import React from 'react';
import { MultiFilterListItem } from './multi-filter-list-item';

const option = {
  key: '1',
  value: '1',
  label: 'The little girl',
};

export const BasicMultiFilterListItem = () => (
  <MultiFilterListItem key={option.value} item={option}>{option.label}</MultiFilterListItem>
);

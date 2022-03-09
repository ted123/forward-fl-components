import React, { ChangeEvent, ReactNode, useContext } from 'react';
import { MultiFilterListContext } from '@4ward/ui.multi-filter-list';
import { Checkbox, OptionLabel, LabelSpan } from './style';

type Option = {
  key: string;
  value: string;
  label: string;
};

export type MultiFilterListItemProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  item: Option
};

export function MultiFilterListItem({ item, children }: MultiFilterListItemProps) {
  const { onSelectItemChange, selected } = useContext(MultiFilterListContext);

  const notSelected = (selected || [])
    .filter(({ value }) => value.toString() === item.value.toString()).length > 0;

  const isOptionSelected = Array.isArray(selected) ? notSelected : true;

  return (
    <OptionLabel>
      <Checkbox
        type="checkbox"
        value={item.value}
        data-testid={`multi-item-${item.key}`}
        checked={isOptionSelected}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onSelectItemChange(e, item)}
      />
      &nbsp;
      <LabelSpan>{children}</LabelSpan>
    </OptionLabel>
  );
}

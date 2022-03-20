import React, { ChangeEvent, ReactNode, useContext } from 'react';
import { MultiFilterListContext } from '@4ward/ui.multi-filter-list';
import { InputCheckbox } from '@4ward/ui.input-checkbox';
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

  const notSelected = selected.filter(({ value }) => value.toString() === item.value.toString()).length > 0;

  const isOptionSelected = Array.isArray(selected) ? notSelected : true;

  return (
    <OptionLabel>
      <InputCheckbox
        data-testid={`multi-item-${item.key}`} 
        checked={isOptionSelected}
        value={item.value} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => onSelectItemChange(e, item)} 
        id={item.value}
      >
        &nbsp;
        {children}
      </InputCheckbox>
    </OptionLabel>
  );
}

import React, { ChangeEvent, ReactNode } from 'react';
import { InputCheckbox } from '@4ward/ui.input-checkbox';
import { OptionLabel } from './style';

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
  selected?: Option[];
  onChange?: (e, item) => void;
};

export function MultiFilterListItem({
  item, children, selected, onChange,
}: MultiFilterListItemProps) {
  const notSelected = (selected || [])
    .filter(({ value }) => value.toString() === item.value.toString()).length > 0;

  const isOptionSelected = Array.isArray(selected) ? notSelected : selected !== undefined;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(e, item);
    }
  };

  return (
    <OptionLabel>
      <InputCheckbox
        data-testid={`multi-item-${item.key}`}
        checked={isOptionSelected}
        value={item.value}
        onChange={handleOnChange}
        id={item.key}
      >
        {children}
      </InputCheckbox>
    </OptionLabel>
  );
}

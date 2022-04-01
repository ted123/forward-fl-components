import React, { ReactNode, useState, useEffect } from 'react';
import { StyledContainer, StyledLabel, StyledRadio } from './style';

export type InputRadioProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  disabled?: boolean;
  id?: string;
  required?: boolean;
  selected?: boolean;
  value?: string;
  fontWeight?: string;
  onChange?: (e) => void;
  radioName?: string;
  checkedColor?:string;
};

export function InputRadio({
  radioName, children, disabled = false, selected = false,
  required, value, onChange, id, fontWeight, checkedColor = null,
}: InputRadioProps) {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);
  const handleOnChange = (e) => {
    setIsSelected(e.currentTarget.checked);

    if (typeof onChange === 'function') {
      onChange(e);
    }
  };
  return (
    <StyledContainer>
      <StyledRadio
        data-testid={`radio-${children}`}
        onChange={handleOnChange}
        value={value}
        id={id}
        checked={isSelected}
        type="radio"
        disabled={disabled}
        required={required}
        name={radioName}
        checkedColor={checkedColor}
      />
      <StyledLabel fontWeight={fontWeight}>{children}</StyledLabel>
    </StyledContainer>
  );
}

import React, {
  ReactNode, useEffect, useState,
} from 'react';
import { StyledContainer, StyledLabel, StyledCheckbox } from './style';

export type InputCheckboxProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  disabled?: boolean;
  id?: string;
  required?: boolean;
  checked?: boolean;
  value?: string;
  fontWeight?: string;
  onChange?: (e) => void;
};

export function InputCheckbox({
  children, disabled = false, checked = false, required, value, onChange, id, fontWeight,
}: InputCheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleOnChange = (e) => {
    setIsChecked(e.currentTarget.checked);

    if (typeof onChange === 'function') {
      onChange(e);
    }
  };

  return (
    <StyledContainer>
      <StyledCheckbox
        data-testid={`checkbox-${children}`}
        onChange={handleOnChange}
        value={value}
        id={id}
        checked={isChecked}
        type="checkbox"
        disabled={disabled}
        required={required}
      />
      <StyledLabel fontWeight={fontWeight}>{children}</StyledLabel>
    </StyledContainer>
  );
}

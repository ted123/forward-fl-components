import React, { ReactNode } from 'react';
import { StyledContainer, StyledLabel, StyledCheckbox } from './style';

export type InputCheckboxProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  disabled?: boolean;
  id?: string;
  required?: boolean;
  onClick?: () => void;
  fontWeight?: string
};

export function InputCheckbox({
  children, disabled = false, required, onClick, id, fontWeight,
}: InputCheckboxProps) {
  return (
    <StyledContainer>
      <StyledCheckbox onClick={onClick} id={id} type="checkbox" disabled={disabled} required={required} />
      <StyledLabel fontWeight={fontWeight}>{children}</StyledLabel>
    </StyledContainer>
  );
}

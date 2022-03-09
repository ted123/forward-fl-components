import React, { ReactNode } from 'react';
import { StyledButton } from './style';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  disabled?: boolean;
  buttonType: string;
  children?: ReactNode;
  onClick?: () => void
};

export function Button({
  disabled = false, buttonType, children, onClick,
}: ButtonProps) {
  return (
    <div>
      <StyledButton onClick={onClick} buttonType={buttonType} disabled={disabled} data-testid="button">{children}</StyledButton>
    </div>
  );
}

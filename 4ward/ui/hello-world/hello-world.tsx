import React, { ReactNode } from 'react';
import { StyledButton } from './style';

export type HelloWorldProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function HelloWorld({ children }: HelloWorldProps) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

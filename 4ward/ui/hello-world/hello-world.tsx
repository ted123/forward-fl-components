import React, { ReactNode, useEffect } from 'react'
import { StyledButton } from './style'

export type HelloWorldProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode
  text?: string
};

export function HelloWorld({ children, text }: HelloWorldProps) {
  useEffect(() => {
    if (text) {
      console.log(text)
    }
  }, [])

  return (
    <StyledButton>
      {text}
      {children}
    </StyledButton>
  );
}

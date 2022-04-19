import React, { ReactNode } from 'react';
import {
  Wrapper, CenterContainer, TooltipBox,
  TooltipTargetButton,
} from './style';

export type PopoverProps = {
  children?: ReactNode;
  content?: ReactNode | string;
  show: boolean;
  position?: string;
  color?: string;
};

export function Popover({
  children, content, show = false, position = 'bottom', color = '#2f353f',
}: PopoverProps) {
  return (
    <Wrapper>
      <TooltipTargetButton>{children}</TooltipTargetButton>
      {show && (
        <CenterContainer position={position} color={color}>
          <TooltipBox position={position} color={color}>{content}</TooltipBox>
        </CenterContainer>
      )}
    </Wrapper>
  );
}

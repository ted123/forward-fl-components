import React, { ReactNode, useState } from 'react';
import { Popover } from '@4ward/ui.popover';
import { Button } from './style';

export type HelpIconProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  size?: number;
  position?: string;
  iconColor?: string;
};

export function HelpIcon({
  children, size = 24, position = 'bottom', iconColor = '#2e7ab8',
}: HelpIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  const Svg = (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
    >
      <title />
      <g id="icomoon-ignore" />
      <path d="M0 512q0-119.429 58.857-220.286t159.714-159.714 220.286-58.857 220.286 58.857 159.714 159.714 58.857 220.286-58.857 220.286-159.714 159.714-220.286 58.857-220.286-58.857-159.714-159.714-58.857-220.286zM238.286 341.143q-8.571 13.714 4.571 24l75.429 57.143q4 3.429 10.857 3.429 9.143 0 14.286-6.857 30.286-38.857 49.143-52.571 19.429-13.714 49.143-13.714 27.429 0 48.857 14.857t21.429 33.714q0 21.714-11.429 34.857t-38.857 25.714q-36 16-66 49.429t-30 71.714v20.571q0 8 5.143 13.143t13.143 5.143h109.714q8 0 13.143-5.143t5.143-13.143q0-10.857 12.286-28.286t31.143-28.286q18.286-10.286 28-16.286t26.286-20 25.429-27.429 16-34.571 7.143-46.286q0-50.286-31.714-93.143t-79.143-66.286-97.143-23.429q-138.857 0-212 121.714zM365.714 786.286q0 8 5.143 13.143t13.143 5.143h109.714q8 0 13.143-5.143t5.143-13.143v-109.714q0-8-5.143-13.143t-13.143-5.143h-109.714q-8 0-13.143 5.143t-5.143 13.143v109.714z" />
    </svg>
  );

  return (
    <Popover show={isHovered} content={children} position={position}>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        iconColor={iconColor}
      >
        {Svg}
      </Button>
    </Popover>
  );
}

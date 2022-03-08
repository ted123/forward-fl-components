import React, { useState } from 'react';
import { Popover } from './popover';

export const BasicPopover = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Popover
        content="Lorem ipsum may be used as a placeholder before the final copy is available."
        position="bottom"
        color="#bf2e3a"
        show={isHovered}
      >
        <button type="button" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          Hover Me
        </button>
      </Popover>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Popover
        content="Lorem ipsum may be used as a placeholder before the final copy is available."
        position="bottom"
        color="#238749"
        show={isClicked}
      >
        <button type="button" onClick={() => setIsClicked((showBox) => !showBox)}>
          Click Me
        </button>
      </Popover>
    </>
  );
};

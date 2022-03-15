import React, {
  ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';

import {
  AccordionSection,
  AccordionBtn,
  AccordionTitle,
  SvgIcon,
  AccordionContent,
} from './style';

export type AccordionProps = {
  /**
   * a node to be rendered in the special component.
   */
  children: ReactNode;
  title: string;
  open?: boolean;
  titleWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'bolder' | 'lighter' | 'normal';
  buttonHeight?: number;
};

export function Accordion({
  children, open, title, titleWeight, buttonHeight = 30,
}: AccordionProps) {
  const [active, setActive] = useState(false);
  const dropdownContent = useRef(null);

  useEffect(() => {
    if (open) {
      setActive(open);
    }
  }, [open]);

  const toggleAccordion = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <AccordionSection>
      <AccordionBtn buttonHeight={buttonHeight} onClick={toggleAccordion}>
        <SvgIcon
          rotation={active}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path d="M118.6
            105.4l128 127.1C252.9 239.6
            256 247.8 256 255.1s-3.125
            16.38-9.375 22.63l-128 127.1c-9.156
            9.156-22.91 11.9-34.88 6.943S64
            396.9 64 383.1V128c0-12.94 7.781-24.62
            19.75-29.58S109.5 96.23 118.6 105.4z"
          />
        </SvgIcon>
        <AccordionTitle titleWeight={titleWeight}>{title}</AccordionTitle>
      </AccordionBtn>
      <AccordionContent data-testid="content" ref={dropdownContent} active={active}>
        {children}
      </AccordionContent>
    </AccordionSection>
  );
}

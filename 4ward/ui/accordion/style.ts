import styled from 'styled-components';

type StyledLabelProps = {
  titleWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'bolder' | 'lighter' | 'normal';
};

type SvgProps = {
  rotation?: boolean;
};

type AccordionContentProps = {
  active?: boolean;
};

export const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AccordionBtn = styled.button`
    background-color: white;
    cursor: pointer;
    padding: 1px;
    align-items: center;
    border: none;
    outline: none;
    position: relative;
    display: flex;
    height: ${(props: { buttonHeight: number }) => `${props.buttonHeight}px`};
`;

export const AccordionTitle = styled.p`
    font-family: 'Open Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: ${(props: StyledLabelProps) => props.titleWeight || 'normal'};
    font-size: 14px;
`;

export const SvgIcon = styled.svg`
    padding-left: 11px;
    padding-right: 11px;
    display: block;
    height: 13px;
    transform: ${(props: SvgProps) => (props.rotation ? 'rotate(90deg)' : 'none')};
`;

export const AccordionContent = styled.div`
    background-color: white;
    overflow: hidden;
    max-height: ${(props: AccordionContentProps) => (props.active ? 'auto' : '0')};
    padding-left: 11px;
    padding-right: 11px;
`;

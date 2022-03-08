import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterContainer = styled.div.attrs((props: {color: string, position: string}) => props)`
  font-family: 'Open Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  max-width: 200px;

  ${(props) => {
    switch (props.position) {
      case 'bottom':
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
        `;
      case 'left':
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          right: calc(56% + 5px);
        `;
      case 'right':
        return css`
          margin-left: 0;
          width: 100%;
          left: calc(56% + 5px);
        `;
      case 'top':
        return css`
          bottom: calc(100% + 5px);
        `;
      default:
        return css``;
    }
  }}
`;

export const TooltipBox = styled.div.attrs((props: {color: string, position: string}) => props)`
  z-index: 1;
  position: absolute;
  background-color: ${(props) => props.color};
  color: #fff;
  border-radius: 5px;
  padding: 10px 8px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => props.color} transparent transparent transparent;
  }

  ${(props) => {
    switch (props.position) {
      case 'bottom':
        return css`
          position: relative;
          &:after {
              border-color: transparent transparent ${props.color} transparent;
              bottom: 100%;
          }
        `;
      case 'left':
        return css`
          &:after {
            border-color: transparent transparent transparent ${props.color};
            left: 100%;
          }
        `;
      case 'right':
        return css`
          &:after {
            border-color: transparent ${props.color} transparent transparent;
            right: 100%;
          }
        `;
      case 'top':
        return css`
          position: relative;
          &:after {
            top: 100%;
          }
        `;
      default:
        return css`
          top: 100%;
        `;
    }
  }}
`;

export const TooltipTargetButton = styled.div`
  border: none;
  background: none;
  padding: 5px;
  margin: -1px;
  color: inherit;
  cursor: inherit;
  display: flex;
`;

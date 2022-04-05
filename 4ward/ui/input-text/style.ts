import styled from 'styled-components';

type StyledSpanProps = {
  labelWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'bolder' | 'lighter' | 'normal';
};

type InputProps = {
  searchIcon?: boolean;
  fontSize?: string;
};

export const Container = styled.div`
  position: relative;
  width: ${(props: { width: string }) => props.width};
`;

export const SvgSearch = styled.svg`
  position: absolute;
  width: 15px;
  display: block;
  flex-shrink: 0;
  padding-left: 8px;
  fill: #414c56;
  height: 100%;
  fill-opacity: ${(props: {disabled: boolean}) => (props.disabled ? 0.3 : '')};
`;

export const SvgX = styled.svg`
  position: absolute;
  width: 8px;
  right: 9px;
  fill: #414c56;
  cursor: pointer;
  height: 100%;
`;

export const Label = styled.label`
  font-weight: ${(props: StyledSpanProps) => props.labelWeight}; 
  display: block;
  font-family: 'Open Sans','Helvetica Neue', Helvetica, Arial, sans-serif;
  padding-bottom: 0.5rem;
`;

export const Span = styled.span`
  color: red;
`;

export const InputWrapper = styled.div`
  height: ${(props: { size: string }) => (props.size === 'large' ? '38px' : '28px')};
  border: none;
  width: 100%;
  position: relative;
  display: flex;
  background: #FFFFFF;
`;

export const Input = styled.input`
  width: 100%;
  box-shadow: inset 1px 1px 3px 0 rgb(0 0 0 / 12%);
  border: 1px solid #c0c8cf;
  padding: ${(props: InputProps) => (props.searchIcon ? '4px 24px 4px 28px' : '4px 27px 4px 4px')};
  color: #494c52;
  font-size: ${(props: InputProps) => (props.fontSize === 'large' ? '0.9rem' : '')};

  &:focus {
    outline: none !important;
    border-color: #7e4082
  }

  ::placeholder {
    color: #cdd3d9;
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  ::-webkit-search-cancel-button:after {
    content: 'X';
    font-style: italic;
    color: red;
  }
`;

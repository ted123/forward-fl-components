import styled from 'styled-components';

type StyledLabelProps = {
  labelWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'bolder' | 'lighter' | 'normal';
};

type StyledDropContentProps = {
  show?: boolean;
  width?: number;
};

export const StyledLabel = styled.label`
  display: block;
  padding-bottom: 5px;
  font-weight: ${(props: StyledLabelProps) => props.labelWeight || 'normal'}; 
`;
export const DropdownBtnWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

export const SvgAngleDown = styled.svg`
  position: absolute;
  width: 8px;
  padding: 2.5px;
  right: 7px !important;
`;
export const ButtonDropDown = styled.button`
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  width: 100%;
  border-color: #d5dbe1;
  text-align: left;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 21px;
  font-family: Arial, verdana, tahoma;
  background-color: #f4f4f4;
  color: #3a4049;

  height: ${(props: { height: number }) => `${props.height}px`};

  &:hover {
    background-color: #eef1f3;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const DropDownContent = styled.div`
  display: ${(props: StyledDropContentProps) => (props.show ? 'block' : 'none')};
  width: ${(props: StyledDropContentProps) => `${props.width}px`};
  position: absolute;
  border: 1px solid #d5dbe1;
  box-shadow: 0px 3px 7px rgb(191 177 177);
  overflow: hidden;
  z-index: 5;
`;

export const InputWrapper = styled.div`
  border: none;
  width: 100%;
  position: relative;
  display: flex;
  background: #FFFFFF;
`;

export const SvgSearch = styled.svg`
  width: 15px;
  display: block;
  padding: 2.5px 5px 2.5px 8px;
  flex-shrink: 0;
`;
export const Input = styled.input`
  border: none;
  height: 30px;
  width: 100%;
  font-family: Arial, verdana, tahoma;
  color: #494c52;

  &:focus {
    outline: none !important;
  }

  ::placeholder {
    color: #494c52;
  }
`;
export const StyledItems = styled.div`
  max-height: 208px;
  overflow-y: scroll;
  border-top: 1px solid #d5dbe1;
`;

export const DivWrapper = styled.div`
  font-style: italic;
  text-align: center;
  position: relative;
  padding: 5px 10px;
  background-color: #FFFFFF;
  color: #494c52;
`;

export const Footer = styled.div`
  border-top: 1px solid #d5dbe1;
  absolute: bottom left;
  height: 32px;
  background: #FFFFFF;
  line-height: 28px;
  text-align: right;
`;

export const Button = styled.button`
  margin-left: 16px;
  text-decoration: underline;
  border: none;
  color: #7e4082;
  background-color: #FFFFFF;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const DropDownButtonStyle = styled.div`
  width: ${(props: { width: number }) => `${props.width}px`};
`;

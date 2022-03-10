import styled from 'styled-components';

export const StyledContainer = styled.span`
display: flex;
flex-direction: row;
align-items: center;
`;
export const StyledCheckbox = styled.input`
  margin-left: 7px;
  appearance:none;
  margin-right: 7px;
  border: 1px solid #A59B9B;
  border-radius: 1px;
  transition-duration: 0.3s;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  height: 19px;
  width: 21px;
  background: #FFFFFF;
  &:checked {
    content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'%3e%3cpath fill='currentColor' d='m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z'/%3e%3c/svg%3e");
    text-align: center;
    color: #000000;
  };

`;
export const StyledLabel = styled.label<{fontWeight?:string}>`
font-weight: ${({ fontWeight }) => fontWeight};
`;

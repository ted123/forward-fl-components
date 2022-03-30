import styled from 'styled-components';

export const StyledContainer = styled.span`
display: flex;
flex-direction: row;
align-items: center;
`;
export const StyledRadio = styled.input`
margin-left: 7px;
margin-right: 7px;
transition-duration: 0.3s;  
cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
height: 12px;
width: 14px;
background: #FFFFFF;
`;

export const StyledLabel = styled.label<{fontWeight?:string}>`
font-weight: ${({ fontWeight }) => fontWeight};
margin: 1px;
`;
